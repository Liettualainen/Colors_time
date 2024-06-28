import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const promiseAmount = form.elements.amount;
const promiseDelay = form.elements.delay;
const promiseStep = form.elements.step;
const submitButton = form.querySelector('[type="submit"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let delay = Number(promiseDelay.value);
  let stepDelay = Number(promiseStep.value);
  let amount = Number(promiseAmount.value);
  
  for (let i = 0; i < amount; i++) {
    createPromise(i, delay+i*stepDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
         {
            timeout: 3000, useIcon: false, width: '240px',
         },
 )
  })
      .catch(({ position, delay }) => {
       Notiflix.Notify.failure(
      `❌ Rejected promise ${position} in ${delay}ms`, {
     timeout:  3000, useIcon: false, width: '240px',},)
  });
  }
  form.reset();
});
