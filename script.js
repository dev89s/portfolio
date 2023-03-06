const hamburgerButton = document.querySelector('#hamburger-menu');

const overlayMenu = document.querySelector('.overlay-menu');

const close = document.querySelector('.close');

const portfolio = document.querySelector('#portfolio-link');
const about = document.querySelector('#about-link');
const contact = document.querySelector('#contact-link');

hamburgerButton.onclick = function () {
  overlayMenu.style.display = 'block';
};

close.onclick = function () {
  overlayMenu.style.display = 'none';
};

portfolio.onclick = function () {
  overlayMenu.style.display = 'none';
};

about.onclick = function () {
  overlayMenu.style.display = 'none';
};

contact.onclick = function () {
  overlayMenu.style.display = 'none';
};