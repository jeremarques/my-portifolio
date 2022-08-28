const greetingMessage = document.getElementById('greeting');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const slider = document.getElementById('cards-slides');
const content = document.getElementById('content');
const navigationBar = document.getElementById('navigation');
const preloader = document.getElementById('preloader');


/* Timeline for animation GSAP */

let tl = gsap.timeline();
  tl
  .from('.anim-nav', {
    duration: 2,
    stagger: {each: 0.2},
    y: 200,
    opacity: 0,
    ease: "power4.out",
    delay: 3.8,
  })
  .from('.anim-info', {
    duration: 2,
    stagger: {each: 0.1},
    x: -200,
    opacity: 0,
    ease: "back.out(1.7)",
  }, '-=2.2')
  .from('#logomarca-home', {
    duration: 2,
    y: 100,
    opacity: 0,
    ease: "power4.out",
  }, '-=2.2')
  .from('#avatar', {
    duration: 2,
    x: 100,
    opacity: 0,
    ease: "back.out",
  }, '-=2.2')
  .from('.anim-tech', {
    duration: 2,
    y: 100,
    opacity: 0,
    stagger: {each: 0.2},
    ease: "power4.out",
  }, '-=2.0')

/* Function that load the sreen load */
const body = document.querySelector('body');
function preLoading() {
  preloader.style.display = "none";
  body.style.overflow = 'auto';
  navigationBar.style.display = "flex";
};

setTimeout(preLoading, 3800);