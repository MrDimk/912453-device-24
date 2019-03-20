var modalMap = document.querySelector(".modal-map");
var modalFeedback = document.querySelector(".modal-feedback");
var mapLink = document.querySelector(".map-popup");
var feedbackLink = document.querySelector(".contacts .write-us");
var mapClose = document.querySelector(".modal-map .modal-close");
var feedbackClose = document.querySelector(".modal-feedback .modal-close");

//map
mapLink.addEventListener("click", evt => {
  evt.preventDefault();
  modalMap.classList.remove("hide");
});

mapClose.addEventListener("click", evt => {
  evt.preventDefault();
  modalMap.classList.add("hide");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!modalMap.classList.contains("hide")) {
      modalMap.classList.add("hide");
    }
  }
});

//Feedback
feedbackLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("hide");
})

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add("hide");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!modalFeedback.classList.contains("hide")) {
      modalFeedback.classList.add("hide");
    }
  }
});

//Main slider

var mainSlider = document.querySelectorAll('.popular-slider-item');
var mainSliderControls = document.querySelectorAll('.main-page-popular .slider-control');
var currentSlide = 0;

mainSliderControls.forEach(function(control, number) {
  if (control.classList.contains('current')) {
    currentSlide = number;
  }
    control.addEventListener('click', function(evt) {
      evt.preventDefault();
      mainSlider[currentSlide].classList.remove('current');
      mainSlider[number].classList.add('current');
      mainSliderControls[currentSlide].classList.remove('current');
      mainSliderControls[number].classList.add('current');
      currentSlide = number;
    });
});


//Advantages slider

var advantagesSlider = document.querySelectorAll(".advantages-slider-item");
var advantagesSliderControls = document.querySelectorAll(".advantages .slider-controls li");
var currentAdvantageSlide = 0;

advantagesSliderControls.forEach(function(control, number) {
  if (control.classList.contains("current")) {
    currentAdvantageSlide = number;
  }
  control.firstChild.addEventListener("click", function(evt) {
    evt.preventDefault();
    advantagesSlider[currentAdvantageSlide].classList.remove("current");
    advantagesSlider[number].classList.add("current");
    advantagesSliderControls[currentAdvantageSlide].classList.remove("current");
    advantagesSliderControls[number].classList.add("current");
    currentAdvantageSlide = number;
  });
});
