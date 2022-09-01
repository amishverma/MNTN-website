// Variable declarations
const openMenuIcon = document.getElementById('menu-toggle-open');
const closeMenuIcon = document.getElementById('menu-toggle-close');
const mobileMenu = document.getElementById('mobile-menu');
const headerOverlay = document.getElementById('header');
const grassImage = document.getElementById('grassland');
const skyImage = document.getElementById('sky');
const mountainsImage = document.getElementById('mountains');
const heroData = document.getElementById('hero-data');

const loader=document.querySelector(".preloader")


window.addEventListener("load",()=>{
    // PRELODER EFFECT
gsap.fromTo(".preloader", {opacity:1,backgroundColor:"#000",}, {opacity:1,backgroundColor:"rgba(0,0,0,0.3)",duration:1.5,ease:"ease-in",display:"none"});
})
// Open menu & add overlay
openMenuIcon.addEventListener("click",()=>{
    mobileMenu.classList.add("menu-opened");
    headerOverlay.classList.add("menu-opened")
})
// Close menu & remove overlay
closeMenuIcon.addEventListener("click",()=>{
    mobileMenu.classList.remove("menu-opened");
    headerOverlay.classList.remove("menu-opened");
})




// Add parallax effect

window.addEventListener("scroll",()=>{
    let scrollPosition= window.scrollY;
    console.log(scrollPosition)

    grassImage.style.transform="translateY(" + -scrollPosition * 0.02 + "%)"
    mountainsImage.style.transform="translateY(" + -scrollPosition * 0.04 + "%)"
    sky.style.transform="translateY(" + -scrollPosition * 0.01 + "%)"
    heroData.style.transform="translateY(" + scrollPosition * 0.03 + "%)"
    heroData.style.opacity=1 - scrollPosition*0.002;
})