document.addEventListener('DOMContentLoaded', function() {
    let dropdown = document.querySelector('.dropdown-container');
    let dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', function() {
        dropdownContent.style.display = 'block';
        setTimeout(() => {
            dropdownContent.style.opacity = 1;
        }, 10); // Use a slight delay to ensure smooth transition
    });

    dropdown.addEventListener('mouseleave', function() {
        dropdownContent.style.opacity = 0;
        setTimeout(() => {
            dropdownContent.style.display = 'none';
        }, 300); // Use a delay to match the CSS transition duration
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let acceptButton = document.getElementById('acceptCookies');
    let cookieContainer = document.getElementById('cookieConsentContainer');

    acceptButton.addEventListener('click', function() {
        cookieContainer.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let closeButton = document.getElementById('closeButton');
    let cookieContainer = document.getElementById('cookieConsentContainer');

    closeButton.addEventListener('click', function() {
        cookieContainer.style.display = 'none';
    });
});
