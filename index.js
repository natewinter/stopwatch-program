const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const restartBtn = document.querySelector("#restartBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let intervalId;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});
restartBtn.addEventListener("click", () => {});
pauseBtn.addEventListener("click", () => {});

function updateTime() {
  elapsedTime = Date.now() - startTime;
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  // hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  console.log(mins);
  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}
