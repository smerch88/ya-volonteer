import '../header/menu';
import '../header/header-hidden';
import '../header/dropdown-btn';
import './volunteer';
import './sticky-sidebar';

const { height: pageHeaderHeight } = document
  .querySelector('.header')
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;
