let nav = document.querySelector(".navArea")
let btn = document.querySelector(".toggle-btn")
let mask = document.querySelector("#mask")

btn.onclick =()=>{
    nav.classList.toggle("open");
}

mask.onclick =()=>{
    nav.classList.toggle("open");
}

const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");
const toggle = document.querySelector(".btn");

const tl = gsap.timeline();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%" , ease: Power2.easeInOut})
.fromTo(hero, 1.2, { width: "100%"}, { width: "80%" , ease: Power2.easeInOut})
.fromTo(slider, 1.2, {y: "-100%"},{y: "0%" , ease: Power2.easeInOut},"+=0.2")
.fromTo(logo, 0.5, {opacity: 0,x: "-100%"},{opacity: 1, x:"0%" ,ease: Power2.easeInOut },"-=0.2")
.fromTo(toggle, 0.5, {opacity: 0,x: "-100%"},{opacity: 1, x:"0%" },"-=0.2")
.fromTo(headline, 0.5, {opacity: 0, x: "-100%"},{opacity: 1, x: "0%"},"-=0.7");
