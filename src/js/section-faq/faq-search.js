const searchInput = document.querySelector('.page-faq__search-input');
const clearButton = document.querySelector('.page-faq__clear-btn');
const questionList = [...document.querySelectorAll('[data-faq="item"]')];
const searchError = document.querySelector('.page-faq__search-error');
const searchForm = document.querySelector('.page-faq__form');

function handleInput(e) {
  searchError.classList.add('visually-hidden');
  const query = e.target.value.trim().toLowerCase();
  clearButton.classList.add('active');

  if (!query) {
    clearButton.classList.remove('active');
    questionList.map(el => {
      if (!el.classList.contains('visually-hidden')) return;
      el.classList.remove('visually-hidden');
    });
  }

  questionList.map(el => {
    const questionTitle = el
      .querySelector('.faq__subtitle')
      .textContent.toLowerCase();

    if (questionTitle.includes(query)) {
      if (el.classList.contains('visually-hidden')) {
        el.classList.remove('visually-hidden');
      }

      return;
    }

    if (el.classList.contains('visually-hidden')) return;
    el.classList.add('visually-hidden');
  });

  const filtered = questionList.filter(
    el => !el.classList.contains('visually-hidden')
  );
  if (filtered.length < 1) {
    searchError.classList.remove('visually-hidden');
  }
}

function handleClearClick() {
  questionList.map(el => {
    if (!el.classList.contains('visually-hidden')) return;
    el.classList.remove('visually-hidden');
  });
  searchInput.value = '';
  searchError.classList.add('visually-hidden');
}

function debounce(fn, wait) {
  let timeout;

  return function (e) {
    let context = this;
    let args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}

if (Boolean(searchInput)) {
  searchInput.addEventListener('input', debounce(handleInput, 300));
}

if (Boolean(clearButton)) {
  clearButton.addEventListener('click', handleClearClick);
}

if (Boolean(searchForm)) {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
  });
}
