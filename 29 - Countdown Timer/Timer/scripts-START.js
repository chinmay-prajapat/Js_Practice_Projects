const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const customTime = document.querySelector(".custom");
const div = document.querySelector(".display");
const p = document.querySelector(".time");

let countDown;

const timer = function (sec) {
  clearInterval(countDown);
  const now = Date.now();
  const then = now + sec * 1000;
  div.classList.remove("bg");

  display(sec);
  endTimer(then);
  console.log(now, then);
  countDown = setInterval(() => {
    const second = Math.round((then - Date.now()) / 1000);

    if (second < 0) return;
    if (second < 5) {
      div.classList.add("bg");
      timerDisplay.textContent = "0";
    }
    display(second);
  }, 1000);
};

const display = function (sec) {
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const second = sec % 60;
  timerDisplay.textContent = `${hour < 10 ? "0" : ""}${hour}:${
    min < 10 ? "0" : ""
  }${min - hour * 60}:${second < 10 ? "0" : ""}${second}`;
  console.log(min, second);
};

const endTimer = function (sec) {
  const now = new Date(sec);
  const hour = now.getHours();
  const min = now.getMinutes(sec);
  console.log(hour - 12, min);
  endTime.textContent = `The Timer Ends At ${hour < 10 ? "0" : ""}${
    hour > 12 ? hour - 12 : hour
  }:${min}`;
};

const startTimer = function () {
  timer(this.dataset.time);
};

buttons.forEach((move) => move.addEventListener("click", startTimer));

const currentTime = function () {
  currentTime;
  const now = new Date();
  const hour = now.getHours();
  const mins = now.getMinutes();
  const date = now.getDate();
  const month = now.getMonth();

  p.textContent = `${hour < 10 ? "0" : ""}${hour > 12 ? hour - 12 : hour}:${
    mins < 10 ? "0" : ""
  }${mins} ${date}/${month + 1}`;
};

currentTime();

document.querySelector("#custom").addEventListener("submit", function (e) {
  e.preventDefault();
  const val = document.querySelector("input");
  timer(val.value);
  val.value = "";
  val.blur();
});
