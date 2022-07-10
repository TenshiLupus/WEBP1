document.addEventListener('DOMContentLoaded', () => {
    
    const moverButton = document.getElementById("object-mover");
    const visibilityDiv = document.getElementById("visibility-block");
    const animationDiv = document.getElementById("animation-block");

    // Element.animate allows for animation of properties, inserting functions in options causes unexpected behavior
    function animateObject() {


        // Using javascripts vanilla animate instead of Jquery's 
        visibilityDiv.animate([

            { transform: 'translateX(0px)' },
            { transform: 'translateX(400px)' },
            { transform: 'translateX(0px)' }

        ], { //Using the index to increment the delay of each circle
            duration: 1000,
            iterations: 1,
            easing: "linear"
        });


        const animation = animationDiv.animate([

            { transform: 'translateX(0px)' },
            { transform: 'translateX(400px)' },
            { transform: 'translateX(0px)' }

        ], { //Using the index to increment the delay of each circle
            duration: 3000,
            iterations: 1,
            easing: "linear",
        })

        // Interesting separation of animation event introduced in chrome 36. Not using Jquery's animate
        // anonymous callback function passed in into the onfinish property.
        animation.onfinish = () => {
            alert("animation finished")
        }

    };

    moverButton.addEventListener("click", animateObject);

})
