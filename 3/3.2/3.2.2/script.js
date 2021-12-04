document.addEventListener('DOMContentLoaded', function(){

    const toggleButton = document.getElementById("visibility");
    const animationButton = document.getElementById("animation");
    const moverButton = document.getElementById("object-mover");

    const visibilityDiv = document.getElementById("visibility-block");
    const animationDiv = document.getElementById("animation-block");
    

    toggleButton.addEventListener("click", changeVisibility);
    animationButton.addEventListener("click", fadeItem);
    moverButton.addEventListener("click", animateObject);
    
    function changeVisibility(){
        $(visibilityDiv).toggle();
    } 

    function fadeItem(){
        $(animationDiv).fadeToggle();
    }

    function animateObject(){
        visibilityDiv.animate({left: "400px"}, 1000, "linear", fadeItem());
        animationDiv.animate({left: "400px"}, 300, "linear", fadeItem());
    }


});