import { dropdownList, handleCloseDropdownMenu } from './dropdown-btn';
import { menuBackdrop, handleCloseMenu } from './menu';

let prevScrollPos = document.documentElement.scrollTop;
export const header = document.querySelector('.header');

function handleHiddenOnScroll() {
  const currentScrollPos = document.documentElement.scrollTop;
  const isContaines = header.classList.contains('header--hidden');

  if (prevScrollPos > currentScrollPos && isContaines) {
    header.classList.remove('header--hidden');
  } else if (prevScrollPos < currentScrollPos && !isContaines) {
    header.classList.add('header--hidden');

    if (dropdownList.classList.contains('header__dropdown-list--open')) {
      handleCloseDropdownMenu();
    }

    if (menuBackdrop.classList.contains('mobile-menu__backdrop--open')) {
      handleCloseMenu();
    }
  }

  if (currentScrollPos < 0) {
    prevScrollPos = 10;
  } else {
    prevScrollPos = currentScrollPos;
  }
}

window.addEventListener('scroll', handleHiddenOnScroll);
