import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const datetimePicker = document.getElementById('datetime-picker');
    const daysElem = document.getElementById('days');
    const hoursElem = document.getElementById('hours');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');

    let countdownInterval;
    let userSelectedDate;

    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
          console.log(selectedDates[0]);
        },

        
      };

      
      

    flatpickr(datetimePicker, options);

    startButton.addEventListener('click', () => {
        console.log("Start button clicked");
        if (!userSelectedDate || startButton.disabled) 
        return;

        const endDate = userSelectedDate.getTime();
        if (isNaN(endDate)) 
        return;

        datetimePicker.disabled = true;
        startButton.disabled = true;
        startButton.classList.remove('enabled');

        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => updateCountdown(endDate), 1000);
    });

    function updateCountdown(endDate) {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            daysElem.textContent = '00';
            hoursElem.textContent = '00';
            minutesElem.textContent = '00';
            secondsElem.textContent = '00';
            datetimePicker.disabled = false;
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(distance);

        daysElem.textContent = formatTime(days);
        hoursElem.textContent = formatTime(hours);
        minutesElem.textContent = formatTime(minutes);
        secondsElem.textContent = formatTime(seconds);
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
    console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
    console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
    console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

    function formatTime(value) {
        return value.toString().padStart(2, '0');
    }
});