let sliderPerforatorInput = document.querySelector('[value="slider-perforator"]');
let sliderDrillInput = document.querySelector('[value="slider-drill"]');
let sliderSection = document.querySelector('li.perforators');
let sliderItemPerforator = document.querySelector('.slider-item-perforator');
let sliderItemDrill = document.querySelector('.slider-item-drill');
let sliderButtonLeft = document.querySelector('[name="slider-button-left"]');
let sliderButtonRight = document.querySelector('[name="slider-button-right"]');

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
