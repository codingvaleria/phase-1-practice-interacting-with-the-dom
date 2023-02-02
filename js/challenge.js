//See the timer increment every second once the page has loaded.
let counter = document.getElementById("counter");
let counternumber = counter.textContent
console.log(counternumber);

let seconds = 0;

function count() {
  setInterval(function () {
    seconds += 1;
    counter.textContent = seconds;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", count);


