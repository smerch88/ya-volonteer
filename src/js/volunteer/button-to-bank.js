import { radioList, volunteerTitle, radioParent } from './volunteer';

const buttonBank = document.querySelector('[data-action="radio-bank-account"]');
const radioBank = document.querySelector('[id="bank-account"]');

function handleButtonBank() {
  radioBank.setAttribute('checked', true);
  const { height: asideHeight } = document
    .querySelector('.volunteer__aside-mini')
    .getBoundingClientRect();

  radioParent.scrollIntoView({ behavior: 'smooth' });
  radioParent.scrollBy(0, -asideHeight);

  radioList.map(el => {
    if (el.dataset.radio === 'bank-account') {
      volunteerTitle.innerHTML = radioBank.nextElementSibling.textContent;
      el.removeAttribute('hidden');
    } else {
      el.setAttribute('hidden', true);
    }
  });
}

buttonBank.addEventListener('click', handleButtonBank);
