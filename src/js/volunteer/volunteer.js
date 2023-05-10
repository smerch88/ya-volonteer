const radioParent = document.querySelector('.volunteer__butoons-list');
const volunteerTitle = document.querySelector('.volunteer__title');
const radioList = [...document.querySelectorAll('[data-radio-list]')];

function handleRadioChange(e) {
  const qwe = radioList.map(el => {
    if (el.dataset.radio === e.target.id) {
      volunteerTitle.innerHTML = e.target.nextElementSibling.textContent;
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
