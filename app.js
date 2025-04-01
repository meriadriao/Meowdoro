const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const timer = document.getElementById("timer");
const timesLooped = document.getElementById("timesLooped");

let timeLeft = 1500; // 25 minutes in seconds
let Interval = null;
let completedCount = 0;

const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timer.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const updateTimesLooped = () => {
  timesLooped.innerHTML = `${completedCount}/4 completed`;
}

const startTimer = () => {
  if (Interval === null) {
    console.log("Starting timer...");
    Interval = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft <= 0) {
        clearInterval(Interval);
        Interval = null;
        completedCount++;
        if (completedCount > 4) completedCount = 0;
        updateTimesLooped();
        alert("Time's up!");
        timeLeft = 1500;
        updateTimer();
      }
    }, 1000);
  }
};

const stopTimer = () => {
  console.log("Stopping timer...");
  clearInterval(Interval);
  Interval = null;
};

const resetTimer = () => {
  console.log("Resetting timer...");
  clearInterval(Interval);
  Interval = null;
  timeLeft = 1500;
  updateTimer();
};

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

updateTimesLooped();