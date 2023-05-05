import './js/header/menu';
import './js/header/header-hidden';
import './js/header/dropdown-btn';
import './js/section-faq/section-faq';

const { height: pageHeaderHeight } = document
  .querySelector('.header')
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;
