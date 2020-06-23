let contactsButton = document.querySelector('.support-button');
let supportField = document.querySelector('.support-field');
let supportClose = document.querySelector('[name="close-button-support"]');
let supportNameInput = document.querySelector('.support-field [name="name"]');
let supportEmailInput = document.querySelector('.support-field [name="email"]');
let supportSubmit = document.querySelector('.support-field-submit');
let isStorageSupport = true;
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
let buyButtons = document.querySelectorAll('button[name="buy-button"]');
let notificationSection = document.querySelector('.basket-notification');
let notificationClose = document.querySelector('.basket-notification-close');
let notificationCloseCross = document.querySelector('[name="close-button-notification"]');
let basketOutput = document.querySelector('output[name="basket-quantity"]');
let basketNumber = 0;
let basketLink = document.querySelector('.basket');
let toTabsButtons = document.querySelectorAll('button[name="to-tabs-button"]');
let tabsOutput = document.querySelector('output[name="tabs-quantity"]');
let tabsNumber = 0;
let tabsLink = document.querySelector('.tabs');
let serviceSliderSection = document.querySelector('.service .container');
let serviceSliderDeliveryInput = document.querySelector('input[value="delivery"]');
let serviceSliderGuaranteeInput = document.querySelector('input[value="guarantee"]');
let serviceSliderCreditInput = document.querySelector('input[value="credit"]');
let serviceSliderDeliveryItem = document.querySelector('.delivery-item');
let serviceSliderGuaranteeItem = document.querySelector('.guarantee-item');
let serviceSliderCreditItem = document.querySelector('.credit-item');

try {
  let storage = localStorage.getItem("supportEmailInput");
} catch (err) {
  isStorageSupport = false;
};

contactsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
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

for ( let buyButton of buyButtons) {
  buyButton.addEventListener("click", function(evt) {
    buyButton.disabled = true;
    notificationSection.classList.remove('hidden');
    basketNumber++;
    basketOutput.textContent = basketNumber;
    if (basketNumber > 0) {
      basketLink.classList.add('header-top-link-full')
    }
  });
};

for ( let toTabsButton of toTabsButtons) {
  toTabsButton.addEventListener("click", function(evt) {
    toTabsButton.disabled = true;
    tabsNumber++;
    tabsOutput.textContent = tabsNumber;
    if (tabsNumber > 0) {
      tabsLink.classList.add('header-top-link-full')
    }
  });
}

notificationCloseCross.addEventListener("click", function(evt) {
  notificationSection.classList.add('hidden');
});

notificationClose.addEventListener("click", function(evt) {
  notificationSection.classList.add('hidden');
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27 && notificationSection.classList.contains('hidden') === false) {
      notificationSection.classList.add('hidden')
  }
});

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
