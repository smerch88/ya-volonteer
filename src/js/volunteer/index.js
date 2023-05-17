import '../header/menu';
import '../header/header-hidden';
import '../header/dropdown-btn';
import './volunteer';
import './volunteer-burger';
// import './button-to-bank';
import './sticky-sidebar';
import '../bank/bank';
// import '../important-aspects/important-aspects';
import '../resorces/resources';

const { height: pageHeaderHeight } = document
  .querySelector('.header')
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;
