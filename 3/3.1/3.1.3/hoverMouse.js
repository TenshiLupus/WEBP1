// Start event when completely loading the document
document.addEventListener('DOMContentLoaded', event => {
    // Hijack normal behavior after load
    event.preventDefault(); 

    // Get references of elements that will be used
    const cube = document.querySelector('.cube');
    const main = document.querySelector('main');
    const cordvalue = document.createElement('div');
    const breakButton = document.querySelector('#break-light');

    // append container for mouse coordinates
    main.appendChild(cordvalue);

    // obtain and update mouse coordinates
    window.addEventListener('mousemove', e => {
        let locx = e.screenX;
        let locy = e.screenY;

        cordvalue.textContent = `${locx} , ${locy}`;
    });

    // change cube color to yellow
    function changeToYellow(e){
        e.target.classList.add('yellow-color');
        console.log(e.target);

    }
    
    // remove yellow color class from cube
    function removeColor(e){
        e.target.classList.remove('yellow-color');
    }

    // change to yellow when hovering over the cuber
    cube.addEventListener('mouseover', changeToYellow);
    cube.addEventListener('mouseout', removeColor);
    
    // Allow button to break color change of the cube
    breakButton.addEventListener('click', () => {
        cube.removeEventListener('mouseover', changeToYellow);
        alert("Lights has been turned off")
    });
 
});