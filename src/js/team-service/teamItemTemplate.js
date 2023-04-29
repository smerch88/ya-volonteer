'use strict';
import { socialList } from './data';

const teamSocialListTemplate = iconHref => {
  return `<li class="team__social-item" >
  <a class="team__social-link" href="#">
      <svg width="24" height="24" >
          <use href="${iconHref}" ></use>
      </svg>
  </a>
</li>`;
};

export const teamItemTemplate = ({ photo, name, specialty }) => {
  return `<li class="team__item" >
  <div class="team__img-wrapper" >
      <img src="${photo}" alt="photo" />
  </div>
  <div class="team__info-wrapper" >
    <a class="team__info-link" href="#">${name}</a>
    <p  class="team__info-specialty">${specialty}</p>
    <ul class="team__social-list" >
        ${socialList.map(teamSocialListTemplate).join('')}
    </ul>
  </div>
</li>`;
};
