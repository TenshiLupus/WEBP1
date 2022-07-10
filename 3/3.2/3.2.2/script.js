// Execute script once the document has been loaded and parsed.
document.addEventListener('DOMContentLoaded', function () {

    // Obatain references to elements that will be used
    const toggleButton = document.getElementById("visibility");
    const animationButton = document.getElementById("animation");
    const visibilityDiv = document.getElementById("visibility-block");
    const animationDiv = document.getElementById("animation-block");

    // toggle classes of elements
    toggleButton.addEventListener("click", changeVisibility);
    animationButton.addEventListener("click", fadeItem);

    // Change the visibility property of the element, still remaining inline
    function changeVisibility() {
        visibilityDiv.classList.toggle('hidden');
    }

    // fade the opacity of the object while still remaining inline.
    function fadeItem() {
        animationDiv.classList.toggle('fade-block');
    }

});