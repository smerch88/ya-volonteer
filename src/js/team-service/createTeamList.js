'use strict';
import { team } from './data';
import { teamItemTemplate } from './teamItemTemplate';

export const createTeamList = () => {
  const teamList = document.querySelector('.team__list');
  teamList.innerHTML = team.map(teamItemTemplate).join('');
};
