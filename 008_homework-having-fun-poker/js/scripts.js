


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1 // Adjust if needed
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
});


window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    }, 1500); // 3000 milliseconds = 3 seconds
});

document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('come-in');
            }
        });
    }, {
        threshold: 0.1 // Adjust as needed
    });

    const elements = document.querySelectorAll('.about-me-text, .poker-rules-text');
    elements.forEach(el => {
        observer.observe(el);
    });
});


particlesJS.load('particles-js', 'js/particles.js', function() {
    console.log('callback - particles.js config loaded');
});


document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.querySelector('#checkbox');

    toggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', toggleSwitch.checked);
    });
});




