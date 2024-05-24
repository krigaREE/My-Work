const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;


    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translate(calc(-50% + ${xValue * speedx}px), calc(-50% + ${yValue * speedy}px))`;


    })
})


let timeline = gsap.timeline();


timeline.from('.bg-img', {
    top: `${document.querySelector(".bg-img").offsetHeight / 2 - 200}px`,
    duration: 1,

})