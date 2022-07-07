
const numbers = new Array();
const controller = new Date();
const regex = new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/);
let fullDate = new String("");

// const calculator = new Math(); Math is not a constructor ...
let foo = new Number(7);

function setupElement(element, value) {
    const currentElement = document.createElement(element);
    currentElement.textContent = value;
    return currentElement;
}

function properRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

const formButton = document.querySelector('#submit');

let submitionHandler = formButton.addEventListener('click', e => {
    // allocate each date segment to a respective index
    numbers[2] = controller.getFullYear();
    numbers[1] = controller.getMonth();
    numbers[0] = controller.getDay();

    // Concatenate numbers to a single string
    for (let i = 0; i < numbers.length; i++) {
        fullDate += numbers[i];
        if (i != numbers.length - 1) {
            fullDate += '-';
        }
    }

    // Check whether input is a valid date format
    const userInput = document.querySelector('#user-input').value;
    let dateCondition = new Boolean(regex.test(userInput));

    // asserting date input
    if (dateCondition) {
        // Create a list item element
        const joinedNumbers = numbers.join("-");
        const firstLi = setupElement('li', joinedNumbers);

        // append firstLi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        vcto list
        const userForm = document.querySelector('#data-list');
        userForm.appendChild(firstLi);

        // Check for conditional
        if (properRandom(0,6) <= 3) {
            let userDate = userInput.split("-");

            //converting strings to ints
            for (let j = 0; j < userDate.length; j++) {
                userDate[j] = Number.parseInt(userDate[j]);
            }

            // loop through userDate till foo is 0 adding foo consecutively
            while (foo > 0) {
                for(let i = 0; i < userDate.length; i++){
                    userDate[i] += foo;
                }
                foo--;
            }
    
            // creating second list item element
            const secondLi = setupElement('li', userDate);
            

            //append secondLi to existing list 
            document.querySelector('#data-list').append(secondLi);
            alert("block ran");
        }

        // reset user input field
        document.querySelector('#user-input').value = '';
    }
    return false;
});





