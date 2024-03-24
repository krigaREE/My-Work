const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

window.addEventListener('load', dayNightMode)

input.addEventListener("keydown", function(event) {
    if(event.key==='Enter') {
        loadImg();
    }
})

function loadImg() {
    removeImages();
    const url = 'https://api.unsplash.com/search/photos/?query=' + input.value + '&per_page=20&client_id=ce6W87B_pmvXs7Ce7gOQZLixo5Mj68KOFDy37QEjUmM';

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch images: ' + response.status);
            }
        })
        .then(data => {
            if (data.results && Array.isArray(data.results)) {
                const imageNodes = [];
                for (let i = 0; i < data.results.length; i++) {
                    imageNodes[i] = document.createElement('div');
                    imageNodes[i].className = 'img';
                    imageNodes[i].style.backgroundImage = 'url(' + data.results[i].urls.raw + ')';
                    imageNodes[i].addEventListener('dblclick', function () {
                        window.open(data.results[i].links.download, '_blank');
                    });
                    grid.appendChild(imageNodes[i]);
                }
            } else {
                throw new Error('Invalid data format received from server');
            }
        })
        .catch(error => {
            console.error('Error loading images:', error.message);
            // You may add additional error handling or UI feedback here
        });
}




function removeImages() {
    grid.innerHTML = '';
}

function dayNightMode() {
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19) {
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}