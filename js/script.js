let contactsButton = document.querySelector('[name="support-button"]');
let supportField = document.querySelector('.support-field');
let supportClose = document.querySelector('[name="close-button-support"]');
let supportNameInput = document.querySelector('.support-field [name="name"]');
let supportEmailInput = document.querySelector('.support-field [name="email"]');
let supportSubmit = document.querySelector('.support-field-submit');
let isHidden = true;
let isStorageSupport = true;
let storage = "";
let mapPopup = document.querySelector('.map-popup');
let mapImage = document.querySelector('.contacts img');
let mapClose = document.querySelector('[name="close-button-map"]');
let sliderPerforatorInput = document.querySelector('[value="slider-perforator"]');
let sliderDrillInput = document.querySelector('[value="slider-drill"]');
let sliderSection = document.querySelector('li.perforators');
let sliderItemPerforator = document.querySelector('.slider-item-perforator');
let sliderItemDrill = document.querySelector('.slider-item-drill');
let sliderButtonLeft = document.querySelector('[name="slider-button-left"]');
let sliderButtonRight = document.querySelector('[name="slider-button-right"]');
let serviceSliderSection = document.querySelector('.service .container');
let serviceSliderDeliveryInput = document.querySelector('input[value="delivery"]');
let serviceSliderGuaranteeInput = document.querySelector('input[value="guarantee"]');
let serviceSliderCreditInput = document.querySelector('input[value="credit"]');
let basketOutput = document.querySelector('output[name="basket-quantity"]');
let basketNumber = basketOutput.value;
let buyButton = document.querySelector('button[name="buy-button"]');

try {
  storage = localStorage.getItem("supportEmailInput");
} catch (err) {
  isStorageSupport = false;
};

contactsButton.addEventListener("click", function(evt) {
  supportField.classList.remove('hidden');
  supportNameInput.focus();
  if (isStorageSupport) {
    supportEmailInput.value = localStorage.getItem("email");
  };
  supportField.classList.add('left-appear');
  supportField.addEventListener("animationend", function(evt) {
    supportField.classList.remove('left-appear');
  });
});

supportClose.addEventListener("click", function(evt) {
  supportField.classList.add('hidden');
});

supportSubmit.addEventListener("click", function(evt) {
  evt.preventDefault();
  localStorage.setItem("email", supportEmailInput.value);
   supportField.classList.add('hidden');
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27 && supportField.classList.contains('hidden') === false) {
      supportField.classList.add('hidden');
      supportField.classList.remove('left-appear');
    }
});

mapImage.addEventListener("click", function(evt) {
  mapPopup.classList.toggle('hidden');
});

mapClose.addEventListener("click", function(evt) {
  mapPopup.classList.add('hidden');
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27 && mapPopup.classList.contains('hidden') === false) {
      mapPopup.classList.add('hidden')
  }
});

sliderSection.oninput = function() {
  if (sliderPerforatorInput.checked) {
    sliderSection.classList.add('slide-perforator');
    sliderSection.classList.remove('slide-drill');
    sliderItemPerforator.classList.add('current-slide');
    sliderItemDrill.classList.remove('current-slide');
  };

  if (sliderDrillInput.checked) {
    sliderSection.classList.add('slide-drill');
    sliderSection.classList.remove('slide-perforator');
    sliderItemDrill.classList.add('current-slide');
    sliderItemPerforator.classList.remove('current-slide');
  };
};

sliderButtonLeft.addEventListener ("click", function(evt) {
  sliderSection.classList.add('slide-perforator');
  sliderSection.classList.remove('slide-drill');
  sliderItemPerforator.classList.add('current-slide');
  sliderItemDrill.classList.remove('current-slide');
  sliderPerforatorInput.checked = true;
});

sliderButtonRight.addEventListener ("click", function(evt) {
  sliderSection.classList.add('slide-drill');
  sliderSection.classList.remove('slide-perforator');
  sliderItemDrill.classList.add('current-slide');
  sliderItemPerforator.classList.remove('current-slide');
  sliderDrillInput.checked = true;
});



console.log(buyButton);
