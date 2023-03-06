let hamburgerButton = document.querySelector("#hamburger-menu");

let overlayMenu = document.querySelector(".overlay-menu");

let close = document.querySelector(".close");

let portfolio = document.querySelector("#portfolio-link");
let about = document.querySelector("#about-link");
let contact = document.querySelector("#contact-link");

hamburgerButton.onclick = function () {
  overlayMenu.style.display = "block";
};

close.onclick = function () {
  overlayMenu.style.display = "none";
}

portfolio.onclick = function () {
  overlayMenu.style.display = "none";
};

about.onclick = function () {
  overlayMenu.style.display = "none";
};

contact.onclick = function () {
  overlayMenu.style.display = "none";
};