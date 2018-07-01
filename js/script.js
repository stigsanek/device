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
      localStorage.setItem("emailField", emailField.value);
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

var promoBtn1 = document.querySelector(".promo-btn-1");
var promoBtn2 = document.querySelector(".promo-btn-2");
var promoBtn3 = document.querySelector(".promo-btn-3");

var promoSlide1 = document.querySelector(".promo-1");
var promoSlide2 = document.querySelector(".promo-2");
var promoSlide3 = document.querySelector(".promo-3");

if (promoBtn1.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoSlide1.classList.add("promo-show");
    promoSlide1.classList.remove("promo-hidden");
    promoSlide2.classList.remove("promo-show");
    promoSlide3.classList.remove("promo-show");
    promoBtn1.classList.add("current");
    promoBtn2.classList.remove("current");
    promoBtn3.classList.remove("current");
  }));

if (promoBtn2.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoSlide2.classList.add("promo-show");
    promoSlide1.classList.add("promo-hidden");
    promoSlide3.classList.remove("promo-show");
    promoBtn1.classList.remove("current");
    promoBtn2.classList.add("current");
    promoBtn3.classList.remove("current");
  }));

if (promoBtn3.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoSlide3.classList.add("promo-show");
    promoSlide1.classList.add("promo-hidden");
    promoSlide2.classList.remove("promo-show");
    promoBtn1.classList.remove("current");
    promoBtn2.classList.remove("current");
    promoBtn3.classList.add("current");
  }));

var control1 = document.querySelector(".control-1");
var control2 = document.querySelector(".control-2");
var control3 = document.querySelector(".control-3");

var slide1 = document.querySelector(".delivery");
var slide2 = document.querySelector(".warranty");
var slide3 = document.querySelector(".credit");

if (control1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("service-show");
    slide1.classList.remove("service-hidden");
    slide2.classList.remove("service-show");
    slide3.classList.remove("service-show");
    control1.classList.add("current");
    control2.classList.remove("current");
    control3.classList.remove("current");
  }));

if (control2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide2.classList.add("service-show");
    slide1.classList.add("service-hidden");
    slide3.classList.remove("service-show");
    control2.classList.add("current");
    control1.classList.remove("current");
    control3.classList.remove("current");
  }));

if (control3.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide3.classList.add("service-show");
    slide1.classList.add("service-hidden");
    slide2.classList.remove("service-show");
    control3.classList.add("current");
    control1.classList.remove("current");
    control2.classList.remove("current");
  }));
