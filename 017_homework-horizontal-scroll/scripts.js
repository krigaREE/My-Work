document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        document.documentElement.scrollLeft += evt.deltaY;
    }, { passive: false });
});


window.addEventListener('scroll', function() {
    var winScroll = document.body.scrollLeft || document.documentElement.scrollLeft;
    var width = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    var scrolled = (winScroll / width) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
    document.getElementsByClassName("vertical-progress")[0].style.left = scrolled + "%";
});