const dropdownButton = document.querySelector('.dropdown-btn');
export const dropdownList = document.querySelector('.header__dropdown-list');

function openDropdownMenu() {
  dropdownList.classList.add('header__dropdown-list--open');
  dropdownButton.classList.add('active');

  dropdownButton.removeEventListener('click', openDropdownMenu);
  dropdownButton.addEventListener('click', closeDropdownMenu);
}

export function closeDropdownMenu() {
  dropdownList.classList.remove('header__dropdown-list--open');
  dropdownButton.classList.remove('active');

  dropdownButton.removeEventListener('click', closeDropdownMenu);
  dropdownButton.addEventListener('click', openDropdownMenu);
}

dropdownButton.addEventListener('click', openDropdownMenu);
