const faqList = document.querySelector('[data-faq="list"]');

function handleFaqItemClick(e) {
  if (!Boolean(e.target.closest('.faq__subtitle'))) return;

  const parentElement = e.target.closest('[data-faq="item"]');
  if (!Boolean(parentElement)) return;

  const isContaines = parentElement.classList.contains('active');

  if (isContaines) {
    parentElement.classList.remove('active');
  } else {
    parentElement.classList.add('active');
  }
}

if (Boolean(faqList)) {
  faqList.addEventListener('click', handleFaqItemClick);
}
