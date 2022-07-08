// Give initial alert on loading of page
window.addEventListener('load', e => {
  alert("This is a todo list program making use of data attributes and local storage for persistent data");
  
});

// Obtain reference to all necessary elements
const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');
const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');
const listCountElement = document.querySelector('[data-list-count]');
const tasksContainer = document.querySelector('[data-tasks]');
const taskTemplate = document.getElementById('task-template');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]');
const title = document.querySelector('h1');

// Use local storage to store list and tasks
const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);
const limit = 1000;

// Select what the current selected list item and rerender its contents
listsContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

// change the state of the task to checked or on checked based on its ID to avoid conflic with other tasks
tasksContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedList = lists.find(list => list.id === selectedListId);
    const selectedTask = selectedList.tasks.find(task => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    save();
    renderTaskCount(selectedList);
  }
});

// Select all existing tasks and remove them based on completion
clearCompleteTasksButton.addEventListener('click', e => {
  const selectedList = lists.find(list => list.id === selectedListId);
  selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
  saveAndRender();
});

// Make a new list without the selected list to delete
deleteListButton.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
});

// make a new list with the given name in the list form
newListForm.addEventListener('submit', e => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
});

// Create a new task with the given name in tast form
newTaskForm.addEventListener('submit', e => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  if (taskName == null || taskName === '') return;
  const task = createTask(taskName);
  newTaskInput.value = null;
  const selectedList = lists.find(list => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
});

// Swap between different opacity values based on the state of key pressing
document.addEventListener('keypress', function (e) {
  console.log(e.key);
  document.querySelector('body').style.opacity = 0.5;
});

document.addEventListener("keyup", e => {
  document.querySelector('body').style.opacity = 1;
});

title.addEventListener('mouseover', changeColor, false);

// Change color based on positioning
document.addEventListener("scroll", e => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    document.querySelector('body').style.background = 'green';
  } else {
    document.querySelector('body').style.background = 'white';
  }
});

// Change color based on the position of the mouse over title
function changeColor(e) {
  e.target.style.color = "orange";
  alert("title triggered");
  console.log("entered event");
  setTimeout(() => {
    e.target.style.color = "";
    e.target.removeEventListener('mouseover', changeColor);
  }, 3000);
  setTimeout(() => {
    e.target.addEventListener('mouseover', changeColor, false);
  }, 3500);

}

// Create a new list object an return it
function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

// Create a new task object and return it
function createTask(name) {
  return { id: Date.now().toString(), name: name, complete: false };
}

// save the content to local storage and render the updated data
function saveAndRender() {
  save();
  render();
}

// save data in local storage
function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

// eliminate checked lists and rerender the data
function render() {
  clearElement(listsContainer);
  renderLists();

  const selectedList = lists.find(list => list.id === selectedListId);
  if (selectedListId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElement.innerText = selectedList.name;
    renderTaskCount(selectedList);
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
}

// Set individual information of each task and render it
function renderTasks(selectedList) {
  selectedList.tasks.forEach(task => {
    // Takes the task template and allocate individual information
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    
    // reusing information from task state to visually set checkerbox to checked.
    checkbox.id = task.id;
    checkbox.checked = task.complete;

    const label = taskElement.querySelector('label');
    label.htmlFor = task.id;
    label.append(task.name);
    tasksContainer.appendChild(taskElement);
  });
}


// Render the remaining tasks left and recolor text based on amount left
function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length;
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
  tasksLevel = '';
  classes = listCountElement.className.split(' ');

  if (incompleteTaskCount >= 5) {
    tasksLevel = 'many-tasks';
  }
  else if (incompleteTaskCount > 3 && incompleteTaskCount < 5) {
    tasksLevel = 'average-tasks';
  }
  else {
    tasksLevel = 'few-tasks';
  }
  // Sets the color of the task count text
  listCountElement.removeAttribute('class');
  newStyle = `${classes[0]} ${tasksLevel}`;
  listCountElement.className = newStyle;
}

// Render the lists 
function renderLists() {
  lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add('active-list');
    }
    listsContainer.appendChild(listElement);
  });
}

// Remove old task for rerendering of new updated tasks
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// render content of page
render()