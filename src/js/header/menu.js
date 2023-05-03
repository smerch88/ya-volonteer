import { dropdownList, closeDropdownMenu } from './dropdown-btn';

const openMenuButton = document.querySelector('.menu-btn');
const closeMenuButton = document.querySelector('.cross');
export const menuBackdrop = document.querySelector('.mobile-menu__backdrop');

function openMenu() {
  menuBackdrop.classList.add('mobile-menu__backdrop--open');

  closeMenuButton.addEventListener('click', closeMenu);
  openMenuButton.removeEventListener('click', openMenu);

  if (window.innerWidth > 768) return;

  document.body.style.overflow = 'hidden';
}

export function closeMenu() {
  menuBackdrop.classList.remove('mobile-menu__backdrop--open');

  openMenuButton.addEventListener('click', openMenu);
  closeMenuButton.removeEventListener('click', closeMenu);

  if (dropdownList.classList.contains('header__dropdown-list--open')) {
    closeDropdownMenu();
  }

  if (window.innerWidth > 768) return;

  document.body.style.overflow = 'auto';
}

openMenuButton.addEventListener('click', openMenu);
