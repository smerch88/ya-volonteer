const dropdownButton = document.querySelector('.dropdown-btn');
export const dropdownList = document.querySelector('.header__dropdown-list');

function handleOpenDropdownMenu() {
  dropdownList.classList.add('header__dropdown-list--open');
  dropdownButton.classList.add('active');

  dropdownButton.removeEventListener('click', handleOpenDropdownMenu);
  dropdownButton.addEventListener('click', handleCloseDropdownMenu);
  document.body.addEventListener('click', handleCloseDropdownMenuOnAnyClick);
}

export function handleCloseDropdownMenu() {
  dropdownList.classList.remove('header__dropdown-list--open');
  dropdownButton.classList.remove('active');

  dropdownButton.removeEventListener('click', handleCloseDropdownMenu);
  dropdownButton.addEventListener('click', handleOpenDropdownMenu);
  document.body.removeEventListener('click', handleCloseDropdownMenuOnAnyClick);
}

function handleCloseDropdownMenuOnAnyClick(e) {
  const isApplyTarget = !e.target.closest('.header__nav-item');

  if (!isApplyTarget) return;
  handleCloseDropdownMenu();
}

dropdownButton.addEventListener('click', handleOpenDropdownMenu);
