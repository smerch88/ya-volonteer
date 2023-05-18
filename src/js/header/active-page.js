const navList = [...document.querySelectorAll('[data-current]')];
const currentPage = document.querySelector('main').id;

navList.map(el => {
  const parentItem = el.closest('[data-item="current"]');
  if (el.dataset.current !== currentPage) return;

  parentItem.classList.add('active');
});
