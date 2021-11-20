document.addEventListener('DOMContentLoaded', function () {

    var numbers = new Array();
    var controller = new Date();
    var regex = new RegExp('/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1]])');
    var fullDate = '';

    numbers[0] = controller.getFullYear().toString();
    numbers[1] = controller.getMonth().toString();
    numbers[2] = controller.getDay().toString();

    for (var i = 0; i < numbers.length; i++) {
        fullDate += numbers[i];
        if(i != numbers.length - 1){
            fullDate += '-'
        }
    }

    document.querySelector('form').onsubmit = e => {
        e.preventDefault();
        const userInput = document.querySelector('#user-input').value;
        let result = regex.test(userInput);
        console.log(result);
        console.log(userInput == result);
        const li = document.createElement('li');
        li.innerHTML = userInput;
        document.querySelector('#data-list').append(li);
        document.querySelector('#user-input').value = '';
        
        console.log(numbers);
        console.log(fullDate)
        alert("hello this worked")
        

        return false;
    }

})


