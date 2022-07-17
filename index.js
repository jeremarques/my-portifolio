const greetingMessage = document.getElementById('greeting')
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
const slider = document.getElementById('cards-slides')

setGreeting()

btnPrev.addEventListener('click', moveInRightDirectionSlider)
btnNext.addEventListener('click', moveInLeftDirectionSlider)


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

function moveInLeftDirectionSlider() {
  slider.style.marginLeft = '-500px'
}
function moveInRightDirectionSlider() {
  slider.style.marginLeft = '0'
}