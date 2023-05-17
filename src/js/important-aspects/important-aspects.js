const btnMoreAspects = document.querySelector('#btnMoreAspects');
const listAspects = document.querySelector('#listAspects');

btnMoreAspects?.addEventListener('click', showMoreAspects);

function showMoreAspects() {
  btnMoreAspects.classList.add('visually-hidden-mobile');
  for (let i = 0; i < listAspects.children.length; i += 1) {
    if (listAspects.children[i].classList.contains('visually-hidden-mobile')) {
      listAspects.children[i].classList.remove('visually-hidden-mobile');
    }
  }
}
