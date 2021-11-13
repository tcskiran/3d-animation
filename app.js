const container = document.querySelector(".container");
const box = document.querySelector(".box");

const info = document.querySelector(".info");
const intro = document.querySelector(".intro img");
const more = document.querySelector(".more");
const description = document.querySelector(".context h3");
const characters = document.querySelector(".characters");


box.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

box.addEventListener("mouseenter", (e) => {
    container.style.transform = "none";
    // console.log(10);
    info.style.transform = "translateZ(150px)";
    intro.style.transform = "translateZ(100px)";
    description.style.transform = "transformZ(100px)";
    characters.style.transform = "transalteZ(75px)";
    more.style.transform = "transalteZ(50px)";
});

box.addEventListener("mouseleave", (e) => {
    container.style.transition = "all 0.5s ease";
    container.style.transform = `rotateY(0deg) rotateY(0deg)`;

    info.style.transform = "translateZ(0px)";
    intro.style.transform = "translateZ(0px)";
    description.style.transform = "transformZ(0px)";
    characters.style.transform = "transalteZ(0px)";
    more.style.transform = "transalteZ(0px)";
});