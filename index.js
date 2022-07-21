const greetingMessage = document.getElementById('greeting')
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
const slider = document.getElementById('cards-slides')
const content = document.getElementById('content')
const navigationBar = document.getElementById('navigation')
const preloader = document.getElementById('preloader')


/* Timeline for animation GSAP */

let tl = gsap.timeline()
  tl
  .from('.anim-nav', {
    duration: 2,
    stagger: {each: 0.2},
    y: 300,
    opacity: 0,
    ease: "back.out(1)",
    delay: 3.8,
  })
  .from('.anim-info', {
    duration: 2,
    stagger: {each: 0.2},
    y: 200,
    opacity: 0,
    ease: "back.out(1.7)",
  }, '-=2.2')
  .from('#logomarca-home', {
    duration: 2,
    y: 200,
    opacity: 0,
    ease: "back.out(1.4)",
  }, '-=2.1')
  .from('#avatar', {
    duration: 2,
    y: 200,
    opacity: 0,
    ease: "back.out(1.4)",
  }, '-=2.2')
  .from('.anim-tech', {
    duration: 2,
    y: 100,
    opacity: 0,
    stagger: {each: 0.2},
    ease: "back.out(1.4)",
  }, '-=2.0')
  

/* Function that load the sreen load */

function preLoading() {
  preloader.style.display = "none"
  content.style.display = "block"
  navigationBar.style.display = "flex"
}

setTimeout(preLoading, 3800);

/* Function whitch set this greeting in home section */

function setGreeting() {
  const date = new Date()
  const hour = date.getHours()

  if (hour >= 2 && hour < 12) {
    greetingMessage.innerHTML = "BOM DIA! EU SOU"
  } else if (hour >= 12 && hour < 19) {
    greetingMessage.innerHTML = "BOA TARDE! EU SOU"
  } else {
    greetingMessage.innerHTML = "BOA NOITE! EU SOU"
  }
}

setGreeting()

/* Slider scritps */

btnPrev.addEventListener('click', moveInRightDirectionSlider)
btnNext.addEventListener('click', moveInLeftDirectionSlider)
const shadow = document.getElementById('shadow')

function moveInLeftDirectionSlider() {
  slider.style.marginLeft = '-500px'
  setTimeout(() => {
    shadow.style.opacity = 0
  }, 700);
}
function moveInRightDirectionSlider() {
  slider.style.marginLeft = '0'
  shadow.style.opacity = 100
}
