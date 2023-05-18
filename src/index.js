import './js/header/menu';
import './js/header/header-hidden';
import './js/header/dropdown-btn';

import './js/section-faq/section-faq';
import './js//bank/bank';

import './js/volunteer/volunteer';
import './js/volunteer/volunteer-burger';
import './js/volunteer/button-to-bank';
import './js/volunteer/sticky-sidebar';
import './js/important-aspects/important-aspects';
import './js/section-faq/faq-search';

const { height: pageHeaderHeight } = document
  .querySelector('.header')
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;
