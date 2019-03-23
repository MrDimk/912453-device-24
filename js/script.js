//my 'forEach' method implementation for IE

var forEachNode = function(nodes, callback) {
  for (var i = 0; i < nodes.length; i++) {
    callback(nodes[i], i);
  }
};

//Main slider

var mainSlider = document.querySelectorAll('.popular-slider-item');
var mainSliderControls = document.querySelectorAll('.main-page-popular .slider-control');
var currentSlide = 0;

forEachNode(mainSliderControls, function(control, number) {
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

var advantagesSlider = document.querySelectorAll('.advantages-slider-item');
var advantagesSliderControls = document.querySelectorAll('.advantages-slider-controls li');
var currentAdvantageSlide = 0;

forEachNode(advantagesSliderControls, function(control, number) {
  if (control.classList.contains('current')) {
    currentAdvantageSlide = number;
  }
  control.firstChild.addEventListener('click', function(evt) {
    evt.preventDefault();
    advantagesSlider[currentAdvantageSlide].classList.remove('current');
    advantagesSlider[number].classList.add('current');
    advantagesSliderControls[currentAdvantageSlide].classList.remove('advantages-current');
    advantagesSliderControls[number].classList.add('advantages-current');
    currentAdvantageSlide = number;
  });
});

// Modal map

var modalMap = document.querySelector('.modal-map');
var mapLink = document.querySelector('.map-popup');
var mapClose = document.querySelector('.modal-map .modal-close');

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.remove('hide');
});

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('hide');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!modalMap.classList.contains('hide')) {
      modalMap.classList.add('hide');
    }
  }
});

//Feedback

var modalFeedback = document.querySelector('.modal-feedback');
var feedbackLink = document.querySelector('.contacts .write-us');
var feedbackClose = document.querySelector('.modal-feedback .modal-close');

var feedbackForm = modalFeedback.querySelector('.feedback-form');

var nameField = feedbackForm.querySelector('[name=name]');
var emailField = feedbackForm.querySelector('[name=email]');
var messageField = feedbackForm.querySelector('[name=message]');

var feedbackFormData = [nameField, emailField, messageField];

feedbackLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('hide');
  feedbackFormData.forEach(function(field) {
    var value = localStorage.getItem(field.name);
    if (value) field.value = value;
  });
  modalFeedback.querySelector('[name=name]').focus();
});

feedbackClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('hide');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!modalFeedback.classList.contains('hide')) {
      modalFeedback.classList.add('hide');
    }
  }
});

// Form validation

var isValid = function(field) {
  if (field.value == '') {
    field.classList.remove('invalid');
    field.offsetWidth = field.offsetWidth;
    field.classList.add('invalid');
    console.warn('Не заполнено поле ' + field.name);
    return false;
  } else {
    field.classList.remove('invalid');
    return true;
  }
};

feedbackForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (isValid(nameField) & isValid(emailField) & isValid(messageField)) {
    localStorage.clear();
    feedbackForm.submit();
  }
});

// Local storeage

feedbackFormData.forEach(function(field) {
  field.addEventListener('input', function(evt) {
    localStorage.setItem(evt.srcElement.name, evt.srcElement.value);
    isValid(field);
  });
});
