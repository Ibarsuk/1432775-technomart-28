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
