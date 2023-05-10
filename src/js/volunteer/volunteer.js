const radioParent = document.querySelector('.volonteer__butoons-list');
const radioList = [...document.querySelectorAll('[data-radio-list]')];

function handleRadioChange(e) {
  const qwe = radioList.map(el => {
    if (el.dataset.radio === e.target.id) {
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
