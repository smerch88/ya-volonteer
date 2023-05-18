const btnMoreResources = document.querySelector('#btnMoreResources');
const listResources = document.querySelector('#listResources');

btnMoreResources?.addEventListener('click', showMoreResources);

function showMoreResources() {
  btnMoreResources.classList.add('visually-hidden-mobile');
  for (let i = 0; i < listResources.children.length; i += 1) {
    if (
      listResources.children[i].classList.contains('visually-hidden-mobile')
    ) {
      listResources.children[i].classList.remove('visually-hidden-mobile');
    }
  }
}
