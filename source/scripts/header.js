const mainNav = document.querySelector('.main-nav');
const toggleButton = document.querySelector('.button-toogle');
const mainHeader = document.querySelector('.main-header');
const mobileOverlayMenu = document.querySelector('.mobile-overlay');

toggleButton.classList.add('button-toogle--visible');
mainHeader.classList.add('main-header--fixed');

toggleButton.addEventListener('click', () => {
  mobileOverlayMenu.classList.toggle('mobile-overlay--active');
  document.body.classList.toggle('no-scroll');
  toggleButton.classList.toggle('button-toogle--close');
});