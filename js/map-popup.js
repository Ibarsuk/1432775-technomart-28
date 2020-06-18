let mapPopup = document.querySelector('.map-popup');
let mapImage = document.querySelector('.contacts img');
let mapClose = document.querySelector('[name="close-button-map"]');

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
