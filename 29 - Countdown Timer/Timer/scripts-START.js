// let countDown;
// const timerDisplay = document.querySelector(".display__time-left");
// const endTime = document.querySelector(".display__end-time");
// const buttons = document.querySelectorAll("[data-time]");
// function timer(seconds) {
//   clearInterval(countDown);
//   const now = Date.now();
//   const then = now + seconds * 1000;
//   displayTimeLeft(seconds);
//   displayEndTime(then);
//   console.log({ then, now }, then - now);
//   countDown = setInterval(() => {
//     const secondsLeft = Math.round((then - Date.now()) / 1000);
//     if (secondsLeft < 0) {
//       clearInterval(countDown);
//       return;
//     }
//     displayTimeLeft(secondsLeft);
//   }, 1000);
// }
// function displayTimeLeft(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remainderSeconds = seconds % 60;
//   const display = `${minutes}:${
//     remainderSeconds < 10 ? "0" : ""
//   }${remainderSeconds}`;
//   timerDisplay.textContent = display;
// }
// function displayEndTime(timestamp) {
//   const end = new Date(timestamp);
//   const hour = end.getHours();
//   const adjustedHour = hour > 12 ? hour - 12 : hour;
//   const minutes = end.getMinutes();
//   endTime.textContent = `Be Back At ${adjustedHour}:${
//     minutes < 10 ? "10" : ""
//   }${minutes}`;
// }
// function startTimer() {
//   timer(this.dataset.time);
// }

// buttons.forEach((button) => button.addEventListener("click", startTimer));
// document.customForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const mins = this.minutes.value;
//   timer(mins * 60);
//   this.reset();
// });
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const customTime = document.querySelector(".custom");
const div = document.querySelector(".display");
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
      // window.style.backgroundColor = "red";
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
  endTime.textContent = `The Timer Ends At ${hour - 12}:${min}`;
};
const startTimer = function () {
  timer(this.dataset.time);
};
buttons.forEach((move) => move.addEventListener("click", startTimer));
// document.querySelector(".custom").addEventListener("submit", function (e) {
//   e.preventDefault();
//   timer(customTime.value);
//   // console.log(this);
// });
// const init = function () {
//   // timerDisplay.textContent.style.display == "none" ? "" : "none";
//   timerDisplay.textContent = "0";
//   setInterval(function () {
//     // f.style.display = (f.style.display == 'none' ? '' : 'none');
//     timerDisplay.textContent = timerDisplay.textContent == "0" ? "" : "0";
//   }, 500);
// };
const currentTime = function () {
  const p = document.querySelector(".time");
  // const newDiv = document.createElement("div");
  // newDiv.setAttribute("class", "currentTime");
  // div.appendChild(newDiv);
  // const p = document.createElement("p");
  // p.setAttribute("class", "time");
  // newDiv.appendChild(p);
  const now = new Date();
  const hour = now.getHours();
  const mins = now.getMinutes();
  const date = now.getDate();
  const month = now.getMonth();

  p.textContent = `${hour < 10 ? "0" : ""}${hour - 12}:${
    mins < 10 ? "0" : ""
  }${mins} ${date}/${month}`;
};
currentTime();
document.querySelector("#custom").addEventListener("submit", function (e) {
  e.preventDefault();
  const val = document.querySelector("input").value;
  timer(val);
  document.querySelector("input").blur();
});
