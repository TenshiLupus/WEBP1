document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest();

    number1 = prompt("Get the first number");
    number2 = prompt("Get the second number");
    serverQuery = 'https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php';

    query = `${serverQuery}?number1=${number1}&number2=${number2}`;
    console.log(query)
    xhr.open('GET', query, true);
    xhr.send(null);
    xhr.onload = function(){
        if(xhr.status == 200){
            alert("succesful");
            document.getElementById("server-response").innerHTML = xhr.responseText;
        }
    }
})
