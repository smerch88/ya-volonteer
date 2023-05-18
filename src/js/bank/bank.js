const btnMore = document.querySelector('#btnMore');
const btnMore2 = document.querySelector('#btnMore2');
const btnMore3 = document.querySelector('#btnMore3');
const list = document.querySelector('#list');
const list2 = document.querySelector('#list2');
const list3 = document.querySelector('#list3');

btnMore?.addEventListener('click', showMore);
btnMore2?.addEventListener('click', showMore2);
btnMore3?.addEventListener('click', showMore3);

function showMore() {
  btnMore.classList.add('visually-hidden-mobile');
  for (let i = 0; i < list.children.length; i += 1) {
    if (list.children[i].classList.contains('visually-hidden-mobile')) {
      list.children[i].classList.remove('visually-hidden-mobile');
    }
  }
}

function showMore2() {
  btnMore2.classList.add('visually-hidden-mobile');
  for (let i = 0; i < list2.children.length; i += 1) {
    if (list2.children[i].classList.contains('visually-hidden-mobile')) {
      list2.children[i].classList.remove('visually-hidden-mobile');
    }
  }
}

function showMore3() {
  btnMore3.classList.add('visually-hidden-mobile');
  for (let i = 0; i < list3.children.length; i += 1) {
    if (list3.children[i].classList.contains('visually-hidden-mobile')) {
      list3.children[i].classList.remove('visually-hidden-mobile');
    }
  }
}
