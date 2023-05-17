const volunteerBurger = document.querySelector('.volunteer__burger');
const volonteerTableContent = document.querySelector(
  '.volunteer__butoons-list'
);

function handleVolonteerBurgerToggle() {
  const isContains = volonteerTableContent.classList.contains(
    'volunteer__butoons-list--open'
  );

  if (isContains) {
    volonteerTableContent.classList.remove('volunteer__butoons-list--open');
    volunteerBurger.classList.remove('volunteer__burger--open');

    window.removeEventListener('click', handleVolonteerAnyToggle);
    return;
  }

  volonteerTableContent.classList.add('volunteer__butoons-list--open');
  volunteerBurger.classList.add('volunteer__burger--open');

  setTimeout(() => window.addEventListener('click', handleVolonteerAnyToggle));
}

function handleVolonteerAnyToggle(e) {
  const isContains = Boolean(
    e.target.closest('.volunteer__butoons-item') ||
      !e.target.closest('.volunteer__butoons-list')
  );

  if (!isContains) return;
  volonteerTableContent.classList.remove('volunteer__butoons-list--open');
  volunteerBurger.classList.remove('volunteer__burger--open');
  window.removeEventListener('click', handleVolonteerAnyToggle);
}
if (Boolean(volunteerBurger)) {
  volunteerBurger.addEventListener('click', handleVolonteerBurgerToggle);
}
