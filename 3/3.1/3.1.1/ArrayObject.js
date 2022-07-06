
const numbers = new Array();
const controller = new Date();
const regex = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
const fullDate = new String("");
const condition = new Boolean(true);

// allocate each date segment to a respective index
numbers[2] = controller.getFullYear()
numbers[1] = controller.getMonth()
numbers[0] = controller.getDay()

// Concatenate numbers to a single string
for (let i = 0; i < numbers.length; i++) {
    fullDate += numbers[i];
    if (i != numbers.length - 1) {
        fullDate += '-'
    }
}



document.querySelector('form').onsubmit = e => {
    // Hijack normal loading behavior
    e.preventDefault();
    alert("entered")

    // select the form element in the page.
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



