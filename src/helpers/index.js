export const queryString = value =>
  value
    .toLowerCase()
    .replace(/[¿@#$%^&/|*?"'`]/g, '')
    .replace(/ /g, '+');
