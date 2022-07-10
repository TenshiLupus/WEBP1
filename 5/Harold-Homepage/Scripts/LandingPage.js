

// creates a continous string that is repeatedly scrolled accros the screen
const elongateMarquee = () => {

    const services = 'Portrait - Weddings - Events';

    const marqueeText = new Array(50).fill(services).join(' — ');
    console.log

    const marquee = document.querySelector('.marquee span');
    console.log(marquee);
    marquee.textContent = marqueeText;
    console.log("all working");

}

// Create a pulsating animation for each circle
const animateCircles = () => {
    const circles = document.querySelectorAll(".shape.circle");
    circles.forEach((circle, index) => {
        circle.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' }

        ], { //Using the index to increment the delay of each circle
            delay: 300 * index,
            duration: 3000,
            iterations: Infinity,
            easing: "ease-in-out"
        });
    });
}

const animateSquiggles = () => {
    const squiggles = document.querySelectorAll('.squiggle');
    const randomNumber = random(-45, 45);

    squiggles.forEach((squiggle, index) => {
        squiggle.animate([
            { transform: 'rotate(0deg)' },
            { transform: `rotate(${randomNumber}deg)` },
            { transform: 'rotate(0deg)' }

        ], { //Using the index to increment the delay of each circle
            delay: 300 * index,
            duration: 5000,
            iterations: Infinity,
            easing: "ease-in-out"
        });
    });
}

const popupElement = () => {
    /*NPM Github library */
    inView('.section')
        .on('enter', viewportSection => {
            viewportSection.classList.add('in-viewport');
        })
        .on('exit', viewportSection => {
            viewportSection.classList.remove('in-viewport');
        });

    inView.threshold(0.2);
}

const popupContent = () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        const artists = section.querySelectorAll('.lineup li');
        const shapes = section.querySelectorAll('.shape');

        artists.forEach((artist, index) => {
            const delay = index * 100;
            artist.style.transitionDelay = delay + 'ms';
        });

        shapes.forEach((shape, index) => {
            const delay = (artists.length + index) * 100;
            shape.style.transitionDelay = delay + 'ms';
        });
    });
}

const smoothScroll = () => {
    const scrollLinks = document.querySelectorAll('.js-scroll');

    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            //using the e keyword to gain acces to the event

            /*Prevent default browser behavior, hijacking normal functionality*/
            e.preventDefault()
            const href = link.getAttribute('href');
            let element = document.querySelector(href);
            
            element.scrollIntoView({
                behavior: 'smooth'
            })
        });
    });
}

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



animateCircles();
animateSquiggles();
popupElement();
popupContent();
smoothScroll();
elongateMarquee();


