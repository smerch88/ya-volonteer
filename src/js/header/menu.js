import { dropdownList, handleCloseDropdownMenu } from './dropdown-btn';

const openMenuButton = document.querySelector('.menu-btn');
const closeMenuButton = document.querySelector('.cross');
export const menuBackdrop = document.querySelector('.mobile-menu__backdrop');

function handleOpenMenu() {
  menuBackdrop.classList.add('mobile-menu__backdrop--open');

  closeMenuButton.addEventListener('click', handleCloseMenu);
  openMenuButton.removeEventListener('click', handleOpenMenu);
  document.body.addEventListener('click', handleCloseMenuOnAnyClick);

  if (window.innerWidth > 768) return;

  document.body.style.overflow = 'hidden';
}

export function handleCloseMenu() {
  menuBackdrop.classList.remove('mobile-menu__backdrop--open');

  openMenuButton.addEventListener('click', handleOpenMenu);
  closeMenuButton.removeEventListener('click', handleCloseMenu);

  if (dropdownList.classList.contains('header__dropdown-list--open')) {
    handleCloseDropdownMenu();
  }

  if (window.innerWidth > 768) return;

  document.body.style.overflow = 'auto';
}

function handleCloseMenuOnAnyClick(e) {
  const isApplyTarget =
    !e.target.closest('.mobile-menu__backdrop') &&
    !e.target.closest('.menu-btn');

  if (!isApplyTarget) return;
  handleCloseMenu();
  document.body.removeEventListener('click', handleCloseMenuOnAnyClick);
}

openMenuButton.addEventListener('click', handleOpenMenu);
