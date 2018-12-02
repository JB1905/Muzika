import json from '../../package.json';

export const queryString = value =>
  value
    .toLowerCase()
    .replace(/[¿@#$%^&/|*?"'`]/g, '')
    .replace(/ /g, '+');

export const setPageTitle = value =>
  (document.title = `${json.name}${value && ` | ${value}`}`);
