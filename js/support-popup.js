let contactsButton = document.querySelector('.support-button');
let supportField = document.querySelector('.support-field');
let supportClose = document.querySelector('[name="close-button-support"]');
let supportNameInput = document.querySelector('.support-field [name="name"]');
let supportEmailInput = document.querySelector('.support-field [name="email"]');
let supportSubmit = document.querySelector('.support-field-submit');
let isStorageSupport = true;

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
