let timeInSec = 85;

function timeToString(seconds) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

function updateTimerDisplay() {
  const timer = document.querySelector(".js--timer");
  timer.textContent = timeToString(timeInSec);
}

function startTimer() {
  updateTimerDisplay();

  const intervalId = setInterval(() => {
    timeInSec--;
    updateTimerDisplay();

    if (timeInSec === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

startTimer();
