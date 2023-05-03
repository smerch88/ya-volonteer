const openMenuButton = document.querySelector('.menu-btn');
const closeMenuButton = document.querySelector('.cross');
const menuBackdrop = document.querySelector('.mobile-menu__backdrop');

function openMenu() {
  menuBackdrop.classList.add('mobile-menu__backdrop--open');

  closeMenuButton.addEventListener('click', closeMenu);
  openMenuButton.removeEventListener('click', openMenu);
}

function closeMenu() {
  menuBackdrop.classList.remove('mobile-menu__backdrop--open');

  openMenuButton.addEventListener('click', openMenu);
  closeMenuButton.removeEventListener('click', closeMenu);
}

openMenuButton.addEventListener('click', openMenu);
