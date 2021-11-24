document.addEventListener('DOMContentLoaded', function () {
    let promptValue = ''
    alert("This is a repeater program")
    document.querySelector('#input-form').onsubmit = e => {
        e.preventDefault()
        do {
            promptValue = prompt("Type repeat, to ensure you want repeat again")
            const li = document.createElement('li')
            li.innerHTML = promptValue
            document.querySelector('#log').append(li)
            if(confirm("exit loop early?")){
                break 
            }
        } while (promptValue === "repeat")
        
        return false
    }

    document.querySelector("#rain-form").onsubmit = e => {
        e.preventDefault()
        var rainWindow = window.open("https://rainymood.com/")
        rainWindow.document.write("The site will close down in 5 seconds")
        closingWindow = setTimeout(function(){
            rainWindow.close()
        }, 5000)
        switchtimer = setTimeout(function(){
            if(rainWindow.confirm("prevent window from closing")){
                clearTimeout(closingWindow)
                rainWindow.document.write("\nWindow has been stopped from closing")
            }

        }, 1000)
        return false; 
    }

    document.querySelector("#timer").onsubmit = e => {
        e.preventDefault()
        var number = 0
        interval = setInterval(function(){alert( number = number + 1)}, 2000)
        stopInterval = setInterval(function(){
            if(confirm("stop timer?")){
                clearInterval(interval)
                clearInterval(stopInterval)
                console.log("timer stopped")
            }
        }, 6000)
        return false; 
    }
})