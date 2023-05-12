export const radioParent = document.querySelector('.volunteer__butoons-list');
export const volunteerTitle = document.querySelector('.volunteer__title');
export const radioList = [...document.querySelectorAll('[data-radio-list]')];

export function handleRadioChange(e) {
  const { height: asideHeight } = document
    .querySelector('.volunteer__aside-mini')
    .getBoundingClientRect();

  radioParent.scrollIntoView({ behavior: 'smooth' });
  radioParent.scrollBy(0, asideHeight);

  radioList.map(el => {
    if (el.dataset.radio === e.target.id) {
      volunteerTitle.innerHTML = e.target.nextElementSibling.textContent;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.removeAttribute('hidden');
    } else {
      if (el.hasAttribute('hidden')) {
        return;
      }
      el.setAttribute('hidden', true);
    }
  });
}

radioParent.addEventListener('change', handleRadioChange);
