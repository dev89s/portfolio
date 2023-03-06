var hamburgerButton = document.querySelector("#hamburger-menu");

var overlayMenu = document.querySelector(".overlay-menu");

var close = document.querySelector(".close");

var portfolio = document.querySelector("#portfolio-link");
var about = document.querySelector("#about-link");
var contact = document.querySelector("#contact-link");


hamburgerButton.onclick = function () {
  overlayMenu.style.display = "block";
}

close.onclick = function () {
  overlayMenu.style.display = "none";
}

portfolio.onclick = function () {
  overlayMenu.style.display = "none";
}

about.onclick = function () {
  overlayMenu.style.display = "none";
}

contact.onclick = function () {
  overlayMenu.style.display = "none";
}