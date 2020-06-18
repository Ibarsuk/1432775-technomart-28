let serviceSliderSection = document.querySelector('.service .container');
let serviceSliderDeliveryInput = document.querySelector('input[value="delivery"]');
let serviceSliderGuaranteeInput = document.querySelector('input[value="guarantee"]');
let serviceSliderCreditInput = document.querySelector('input[value="credit"]');
let serviceSliderDeliveryItem = document.querySelector('.delivery-item');
let serviceSliderGuaranteeItem = document.querySelector('.guarantee-item');
let serviceSliderCreditItem = document.querySelector('.credit-item');

serviceSliderDeliveryInput.addEventListener("click", function(evt) {
  serviceSliderDeliveryItem.classList.add('current-slide');
  serviceSliderGuaranteeItem.classList.remove('current-slide');
  serviceSliderCreditItem.classList.remove('current-slide');
});

serviceSliderGuaranteeInput.addEventListener("click", function(evt) {
  serviceSliderGuaranteeItem.classList.add('current-slide');
  serviceSliderDeliveryItem.classList.remove('current-slide');
  serviceSliderCreditItem.classList.remove('current-slide');
});

serviceSliderCreditInput.addEventListener("click", function(evt) {
  serviceSliderCreditItem.classList.add('current-slide');
  serviceSliderGuaranteeItem.classList.remove('current-slide');
  serviceSliderDeliveryItem.classList.remove('current-slide');
});
