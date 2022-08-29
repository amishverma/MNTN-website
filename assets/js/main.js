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
 gsap.to(".preloader",{opacity:0,duration:2,y:0,ease:"power2"})
})
// Open menu & add overlay

// Close menu & remove overlay

// Add parallax effect