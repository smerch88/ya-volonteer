export const anchorParent = document.querySelector('.volunteer__butoons-list');
export const anchorArray = [...document.querySelectorAll('.volunteer__anchor')];
export const volunteerTitle = document.querySelector('.volunteer__title');
export const anchorList = [...document.querySelectorAll('[data-anchor-list]')];

export function handleAnchorClick(e) {
  if (!e.target.classList.contains('volunteer__anchor')) return;

  anchorArray.map(el => {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
    }
  });

  e.target.classList.add('active');

  anchorList.map(el => {
    if (el.id === e.target.dataset.id) {
      volunteerTitle.innerHTML = e.target.textContent;
      el.classList.remove('visually-hidden');
    } else {
      if (el.classList.contains('visually-hidden')) {
        return;
      }
      el.classList.add('visually-hidden');
    }
  });
}
if (Boolean(anchorParent)) {
  anchorParent.addEventListener('click', handleAnchorClick);
}
