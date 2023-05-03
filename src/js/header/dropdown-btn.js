const dropdownButton = document.querySelector('.dropdown-btn');
const dropdownList = document.querySelector('.header__dropdown-list');

function openDropdownMenu() {
  dropdownList.classList.add('header__dropdown-list--open');

  dropdownButton.removeEventListener('click', openDropdownMenu);
  dropdownButton.addEventListener('click', closeDropdownMenu);
}

function closeDropdownMenu() {
  dropdownList.classList.remove('header__dropdown-list--open');

  dropdownButton.removeEventListener('click', closeDropdownMenu);
  dropdownButton.addEventListener('click', openDropdownMenu);
}

dropdownButton.addEventListener('click', openDropdownMenu);
