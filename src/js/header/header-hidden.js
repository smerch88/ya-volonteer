let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.header').classList.remove('header--hidden');
  } else {
    document.querySelector('.header').classList.add('header--hidden');
  }

  prevScrollPos = currentScrollPos;
};
