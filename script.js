const rain = new Audio("./sounds/Thunderstorm.mp3");
const Castamere = new Audio("./sounds/Rains-of-Castamere.mp3");

rain.volume = 0.1;
Castamere.volume = 0.3;

const myButton = document.querySelector(".main-title button")
const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalId = null;

// It Works LOL XD
myButton.addEventListener('click', () => {
  rain.play();
  Castamere.play();
});

function jumpToInfo(elementId) {
  var element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
document.addEventListener('contextmenu', event => event.preventDefault());


document.addEventListener("DOMContentLoaded", initializeSlider);

// Image Slider
function initializeSlider() {

  if (slides.length > 0) {

    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 6000);
  }

};


function showSlide(index) {

  if (index >= slides.length) {
    slideIndex = 0;

  }
  else if (index < 0) {
    slideIndex = slides.length - 1;

  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");

};


function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);

}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);

}