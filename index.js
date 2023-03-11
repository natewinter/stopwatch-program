const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});
resetBtn.addEventListener("click", () => {});
pauseBtn.addEventListener("click", () => {});

function updateTime() {
  elapsedTime = Date.now() - startTime;
}
