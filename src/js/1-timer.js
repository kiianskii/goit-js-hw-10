import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputEl = document.querySelector("input#datetime-picker")
const startBtn = document.querySelector("button[data-start]")
const timerEl = document.querySelector(".timer")
const msgOptions = {
    message: "Please choose a date in the future",
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: '#fff',
    backgroundColor: '#EF4040',
    progressBarColor: '#B51B1B',
    theme: 'dark',
    position: 'topRight',
    class: 'message',
};

let userSelectedDate;

startBtn.disabled = true;

startBtn.addEventListener('click', () => {
  startTimer();
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {

        if (selectedDates[0] < options.defaultDate) {
            startBtn.disabled = true;
          return iziToast.show(msgOptions); 
        }
        inputEl.disabled = false;
         startBtn.disabled = false;
        userSelectedDate = selectedDates[0];
  },
};

flatpickr(inputEl, options)


function startTimer() {
    startBtn.disabled = true;
     inputEl.disabled = true;

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = userSelectedDate - currentTime;
      renderTime(diff);
      if (diff <= 1000) {
          clearInterval(intervalId)
          inputEl.disabled = false;
        iziToast.success({
            message: 'Congratulation',
            position: 'topRight',
            messageColor: '#fff',
            backgroundColor: '#59a10d',
            progressBarColor: '#326101',
});
      };
  }, 1000);
}

function renderTime(diff) {
    const { days, hours, minutes, seconds } = convertMs(diff);
    timerEl.querySelector("[data-days]").textContent = addLeadingZero(days);
    timerEl.querySelector("[data-hours]").textContent = addLeadingZero(hours);
    timerEl.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
    timerEl.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0")
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}




