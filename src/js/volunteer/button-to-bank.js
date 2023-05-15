import { anchorList, volunteerTitle, anchorArray } from './volunteer';

const buttonBank = document.querySelector('[data-action="radio-bank-account"]');

function handleButtonBank() {
  anchorArray.map(el => {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
      return;
    }
    if (el.dataset.id === 'bank-account') {
      el.classList.add('active');
    }
  });

  anchorList.map(el => {
    if (el.id === 'bank-account') {
      volunteerTitle.innerHTML = 'Відкриття банківсього рахунку';
      el.classList.remove('visually-hidden');
    } else {
      el.classList.add('visually-hidden');
    }
  });
}

buttonBank.addEventListener('click', handleButtonBank);
