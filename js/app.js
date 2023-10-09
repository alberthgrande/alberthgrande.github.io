const countDownContaine = document.querySelector(".content-wrapper");
const fireworkContainer = document.querySelector(".fireworks-container");
const daysSpan = document.querySelector("#days");
const hoursSpan = document.querySelector("#hours");
const minutesSpan = document.querySelector("#minutes");
const secondsSpan = document.querySelector("#seconds");
const newYear = document.querySelector("#new-year");
const newYearText = document.querySelector(".centered-container");

const now = new Date();
const currentYear = now.getFullYear();
const nextNewYear = new Date(currentYear + 1, 0, 1);
newYear.innerHTML = nextNewYear.getFullYear();

const countToDate = nextNewYear.getTime(); // Countdown to next New Year's Day

const countdown = () => {
  const now = new Date().getTime();
  const distance = countToDate - now;

  if (distance <= 0) {
    // Clear the interval and stop the countdown when it reaches 0 or less
    clearInterval(countdownInterval);
    daysSpan.innerHTML = "0";
    hoursSpan.innerHTML = "0";
    minutesSpan.innerHTML = "0";
    secondsSpan.innerHTML = "0";
    countDownContaine.style.display = "none"; // Hide the countdown
    newYearText.style.display = "block";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysSpan.innerHTML = days;
    hoursSpan.innerHTML = hours;
    minutesSpan.innerHTML = minutes;
    secondsSpan.innerHTML = seconds;
  }
};

countdown();

const countdownInterval = setInterval(countdown, 1000);

const fireworks = new Fireworks(fireworkContainer, {
  speed: 4,
  acceleration: 1.05,
  friction: 1,
  gravity: 4,
  particles: 400,
  explosion: 10,
});

fireworks.start();
