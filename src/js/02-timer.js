import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const flatpickrInit = document.querySelector('#datetime-picker');
const timer = document.querySelectorAll('.value');
const daysRemainig = document.querySelector('[data-days]');
const hoursRemainig = document.querySelector('[data-hours]');
const minutesRemainig = document.querySelector('[data-minutes]');
const secondsRemainig = document.querySelector('[data-seconds]');
let timerId;

buttonStart.disabled = 'true';
buttonStop.disabled = 'true';
let FutureDate;

const options = {
  enableTime: true,
  time_24hr: true,
    defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        FutureDate = selectedDates[0].getTime();
      Newdat();
    }
};
flatpickr(flatpickrInit, options);

function Newdat() {
  let CurrentTime = options.defaultDate.getTime();
  if (CurrentTime >= FutureDate) {
   Notiflix.Notify.failure(
      'Please choose a date in the future', {
    timeout: 1000,  width: '240px',},
);
  }
    else {
       buttonStart.disabled = '';
    }
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
   return value.padStart(2, '0');
  }

buttonStart.addEventListener("click", () => {
  buttonStart.disabled = 'true';
    buttonStop.disabled = '';
    timerId = setInterval(() => {
      let CurrentTime = new Date().getTime();
      console.log("edff", CurrentTime); 
       console.log("future", FutureDate); 
      let ms = FutureDate - CurrentTime;
      if (ms >= 0) {
        console.log("werewrewr",  secondsRemainig.innerHTML = addLeadingZero(String(convertMs(ms).seconds)));
        daysRemainig.innerHTML = addLeadingZero(String(convertMs(ms).days));
        hoursRemainig.innerHTML = addLeadingZero(String(convertMs(ms).hours));
        minutesRemainig.innerHTML = addLeadingZero(String(convertMs(ms).minutes));
        secondsRemainig.innerHTML = addLeadingZero(String(convertMs(ms).seconds));         
      }
  }, 1000);
});

buttonStop.addEventListener("click", () => {
    clearInterval(timerId);
    buttonStart.disabled = 'true';
  buttonStop.disabled = 'true';  
  for (let i = 0; i < timer.length; i++) {
    timer[i].innerHTML = '00' 
    }
});


