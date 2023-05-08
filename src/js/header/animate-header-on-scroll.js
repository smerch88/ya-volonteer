import { dropdownList, handleCloseDropdownMenu } from './dropdown-btn';
import { menuBackdrop, handleCloseMenu } from './menu';

const header = document.querySelector('.header');

function handleAnimationHeaderOnScroll() {
  const currentScrollPos = document.documentElement.scrollTop;

  if (currentScrollPos > 4) {
    header.classList.add('header--small');

    if (dropdownList.classList.contains('header__dropdown-list--open')) {
      handleCloseDropdownMenu();
    }

    if (menuBackdrop.classList.contains('mobile-menu__backdrop--open')) {
      handleCloseMenu();
    }
  } else {
    header.classList.remove('header--small');
  }
}

window.addEventListener('scroll', handleAnimationHeaderOnScroll);
