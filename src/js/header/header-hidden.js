import { dropdownList, closeDropdownMenu } from './dropdown-btn';

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.header').classList.remove('header--hidden');
  } else {
    document.querySelector('.header').classList.add('header--hidden');

    if (dropdownList.classList.contains('header__dropdown-list--open')) {
      closeDropdownMenu();
    }
  }

  prevScrollPos = currentScrollPos;
};
