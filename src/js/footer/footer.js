const svgMail = document.querySelector('#svgMail-js');
const svgPhone = document.querySelector('#svgPhone-js');
const mail = document.querySelector('#mail-js');
const phone = document.querySelector('#phone-js');

mail.addEventListener('mouseover', () => svgMail.classList.add('svg--green'));
phone.addEventListener('mouseover', () => svgPhone.classList.add('svg--green'));
mail.addEventListener('mouseout', () => svgMail.classList.remove('svg--green'));
phone.addEventListener('mouseout', () => svgPhone.classList.remove('svg--green'));
