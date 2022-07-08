
// will store the value of the prompt
let promptValue = '';

alert("This is a repeater program");

//input form event block
document.querySelector('#count-form').addEventListener('click', e => {

    do {
        promptValue = prompt("Type repeat, to ensure you want repeat again");

        // create the list item element
        const li = document.createElement('li');
        li.textContent = promptValue;

        // Apped the list item to the "log"
        document.querySelector('#log').appendChild(li);

        // Prompt user if they truly want to quit
        if (confirm("exit loop early?")) {
            break;
        }
        // If user pressed repeat. Loop the block
    } while (promptValue === "repeat");

    return false;
});

//seperate timeouts for different queries, 
document.querySelector("#rain-form").addEventListener('click', e => {

    // rainWindow variable in outside scope
    let rainWindow = null;

    // open an intermediaryWindow
    let intermediaryWindow = window.open();
    intermediaryWindow.document.write("The site will redirect you to the page in 7 seconds | ");


    //Open an external webpage
    let intermediary = setTimeout(e => {

        // set initial opening timer to open rainymood window
        let openRainWindow = setTimeout(() => {
            rainWindow = intermediaryWindow.open("https://rainymood.com/");
        }, 7000);

        // initialize steps to interrupt opening of rain window
        let preventOpening = setTimeout(() => {
            // ask for permission to close
            if (intermediaryWindow.confirm("prevent window swapping")) {
                clearTimeout(openRainWindow);
                // notify user in intermediary window
                intermediaryWindow.document.write("Window has been stopped from swapping | ");
                setTimeout(() => {
                    intermediaryWindow.document.write("Closing intermediary in 2 seconds");
                }, 500);

                // Close intermediary window
                setTimeout(() => {
                    intermediaryWindow.close();
                }, 2000);
            }
        }, 1500);
    }, 1000);

    // Close rain window in case it was opened
    if (rainWindow != null) {
        setTimeout(function () {
            close(rainWindow);
        }, 5000);
    }
    return false;
});

document.querySelector("#timer").addEventListener('click', e => {

    let number = 0;
    //set interval at which numbers will appear 
    let interval = setInterval(function () {
        alert(number = number + 1);

    }, 1500);

    // Initialize steps to stop timer
    let stopInterval = setInterval(function () {
        if (confirm("stop timer?")) {
            clearInterval(interval);
            clearInterval(stopInterval);

            // setup log item to log
            const logItem = document.createElement('li');
            logItem.textContent = 'timer stopped';
            document.querySelector('#log').appendChild(logItem);
        }
    }, 6000);

    return false;
});