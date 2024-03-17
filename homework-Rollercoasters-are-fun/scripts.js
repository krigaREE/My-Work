window.addEventListener('scroll', function() {
    const trackContainer = document.getElementById('track-container');
    const cart = document.getElementById('cart');

    // Calculate how much the user has scrolled from the top
    const scrollDistance = window.scrollY;

    // Calculate a factor to slow down the cart's ascent
    const scrollFactor = 0.25; // Adjust this value for desired speed (smaller = slower)

    // Calculate the cart's vertical movement based on scrolling
    const cartMovement = scrollDistance * scrollFactor;

    // Calculate the maximum upwards movement for the cart
    const maxMovement = trackContainer.offsetHeight - cart.offsetHeight;

    // Calculate the new bottom position of the cart
    const newBottomPosition = Math.min(10 + cartMovement, maxMovement); // 10 is the initial bottom offset

    // Apply the new position
    cart.style.bottom = newBottomPosition + 'px';
});


document.addEventListener('DOMContentLoaded', function() {
    var preloaderVideo = document.getElementById('preloaderVideo');
    var mainContent = document.getElementById('mainContent');

    preloaderVideo.addEventListener('ended', function() {
        // Option 1: Hide the video
        preloaderVideo.style.display = 'none';

        // Option 2: Remove the video element entirely (uncomment if necessary)
        // preloaderVideo.remove();

        // Ensure mainContent is visible before starting the fade-in effect
        mainContent.style.display = 'block';

        // Trigger reflow for transition to take effect
        void mainContent.offsetWidth;

        // Smoothly fade in the main content
        mainContent.classList.add('fade-in');
    });
});


const typingEffect = document.getElementById('typing-effect');
const text = "Made by krigaREE";
let counter = 0; // To keep track of typed characters

function typeEffect() {
    if (counter < text.length) {
        typingEffect.textContent += text.charAt(counter);
        counter++;
        setTimeout(typeEffect, 500); // Speed of 100ms per character
    } else {
        typingEffect.style.animation = 'blink 1.7s infinite'; // Start cursor blink
    }
}

typeEffect(); // Start the typing animation



document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
        var tickets = document.querySelector('.tickets');
        if (tickets.style.visibility === 'hidden') {
            tickets.style.visibility = 'visible';
        } else {
            tickets.style.visibility = 'hidden';
        }
    }, 500); // 500 milliseconds = 0.5 seconds
});
