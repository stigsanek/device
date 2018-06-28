var link = document.querySelector(".modal-btn");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = document.querySelector(".form-write-us");
var nameField = document.querySelector("[name=name]");
var emailField = document.querySelector("[name=email]");
var textField = document.querySelector("[name=text]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("nameField");
  storageEmail = localStorage.getItem("emailField");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageName, storageEmail) {
    nameField.value = storageName;
    emailField.value = storageEmail;
    textField.focus();
  } else {
    nameField.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {

  if (!nameField.value || !emailField.value || !textField.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameField", nameField.value);
      localStorage.setItem("emailField", emailField.value); //
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var linkMap = document.querySelector(".modal-map-btn");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});
