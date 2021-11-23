document.addEventListener('DOMContentLoaded', function () {

    var numbers = new Array();
    var controller = new Date();
    var regex = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
    var fullDate = '';

    numbers[2] = controller.getFullYear()
    numbers[1] = controller.getMonth()
    numbers[0] = controller.getDay()

    for (var i = 0; i < numbers.length; i++) {
        fullDate += numbers[i];
        if (i != numbers.length - 1) {
            fullDate += '-'
        }
    }



    document.querySelector('form').onsubmit = e => {
        e.preventDefault();
        alert("entered")
        const userInput = document.querySelector('#user-input').value
        let result = regex.test(userInput)
        console.log(result)
        if (result) {
            const li = document.createElement('li')
            li.innerHTML = numbers.join("-")
            document.querySelector('#data-list').append(li)
            console.log(numbers)
            console.log(fullDate)
            
            if (Math.round(Math.random())) {
                let userDate = userInput.split("-")
                for (var j = 0; j < userDate.length; j++) {
                    userDate[j] = Number.parseInt(userDate[j])
                }
                userDate[0] = numbers[0]
                userDate = userDate.join("-")
                const secondLi = document.createElement('li')
                secondLi.innerHTML = userDate
                console.log(secondLi)
                document.querySelector('#data-list').append(secondLi)
                alert("block ran")
            }
            numbers = fullDate.split("-")
            document.querySelector('#user-input').value = ''
        }
        return false
    }


})


