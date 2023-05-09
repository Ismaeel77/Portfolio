// Skills Section
let progSpans = document.querySelectorAll(".the-progress span");
let porgSection = document.querySelector(".our-skills");

window.onscroll = function () {
  if (window.scrollY >= porgSection.offsetTop + 100) {
    progSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
    if (window.scrollY >= statsSection.offsetTop) {
      if (!started) {
        spanStats.forEach((span) => startCount(span));
      }
      started = true;
    }
  }
};

// Countdown To The End Of 2023
let CountdownDate = new Date("Dec 31 , 2023 23:59:59").getTime();
let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();
  //Get Difference Between Dates
  let dataDiff = CountdownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;

  let hours = Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((dataDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((dataDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

// Increase Number In Stat Section
let statsSection = document.getElementById("stats");
let spanStats = document.querySelectorAll(".stats span.number");
let started = false;

function startCount(el) {
  let stats = el.dataset.stats;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == stats) {
      clearInterval(count);
    }
  }, 2000 / stats);
}
