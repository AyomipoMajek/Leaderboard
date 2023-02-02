/* eslint-disable no-restricted-globals */
import add from './addname.js';

const theForm = () => {
  const form = document.getElementById('formdetails');
  const theName = document.getElementById('name');
  const theScore = document.getElementById('score');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    add(theName.value, theScore.value);
    theName.value = '';
    theScore.value = '';
  });
  const refresh = document.querySelector('.refreshBtn');
  refresh.addEventListener('click', () => {
    location.reload();
  });
};

export default theForm;