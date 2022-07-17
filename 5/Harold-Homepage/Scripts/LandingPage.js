//Once the document has been loaded proceed with script statements.
document.addEventListener('DOMContentLoaded', () => {
    
    //Popup element on screen once 30% of a semantic section is in view
    const popupElement = () => {
        /*External NPM library function*/
        inView('.semantic-section')
            .on('enter', viewportSection => {
                viewportSection.classList.add('in-viewport');
            })
            .on('exit', viewportSection => {
                viewportSection.classList.remove('in-viewport');
            });
    
        inView.threshold(0.3);
    }
    
    //Transition smoothly between the different section through its anchors
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
                });
            });
        });
    }
    
    //Random function, cannot find a non detrimental use case for the page.
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    //trigger functions towards the end by calling them
    popupElement();
    smoothScroll();

});
