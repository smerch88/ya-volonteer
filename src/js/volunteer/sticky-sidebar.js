import { header } from '../header/header-hidden';

const sidebar = document.querySelector('.volunteer__aside');

function handleMoveSidebar() {
  const isHeaderContaines = header.classList.contains('header--hidden');

  if (isHeaderContaines) {
    sidebar.classList.remove('volunteer__aside--top');
    return;
  }
  if (!isHeaderContaines) {
    sidebar.classList.add('volunteer__aside--top');
  }
}

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      handleMoveSidebar();
    }
  });
});

const config = { attributes: true, childList: false, subtree: false };

observer.observe(header, config);
