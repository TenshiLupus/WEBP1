
    
    // create an XML request object
    const xhr = new XMLHttpRequest();



    // Prompt numbers that will be added by the php script
    let number1 = prompt("Get the first number");
    let number2 = prompt("Get the second number");

    
    let serverScript = 'https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php';
    
    let query = `${serverScript}?number1=${number1}&number2=${number2}`;
    
    xhr.onreadystatechange = () => {
       
        if(xhr.status == 200){
           
            document.querySelector('#server-response').textContent = xhr.response;
            
            console.log("appended");
        }
      
    }
    xhr.open('GET', query, true);
    xhr.send();
