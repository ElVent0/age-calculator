import './sass/index.css';
import Notiflix from 'notiflix';

const buttonStartEl = document.querySelector('.container__button--start');
const buttonRepeatEl = document.querySelector('.container__button--repeat');
const formStartEl = document.querySelector('.container__form-start');
const formRepeatEl = document.querySelector('.container__form-repeat');
const inputEl = document.querySelector('.container__input');
const resultEl = document.querySelector('.container__result');

buttonStartEl.addEventListener('click', onStart);
buttonRepeatEl.addEventListener('click', onRepeat);

function onStart(e) {
  e.preventDefault();
  console.log(inputEl.value);
  if (inputEl.value === '') {
    Notiflix.Notify.failure('Введіть число');
    return;
  } else if (inputEl.value >= 110) {
    {
      Notiflix.Notify.failure('Введіть правильне число');
      return;
    }
  }

  formStartEl.classList.toggle('hidden');
  formRepeatEl.classList.toggle('hidden');
  resultEl.textContent = inputEl.value;
}

function onRepeat(e) {
  e.preventDefault();
  formStartEl.classList.toggle('hidden');
  formRepeatEl.classList.toggle('hidden');
  inputEl.value = '';
}
