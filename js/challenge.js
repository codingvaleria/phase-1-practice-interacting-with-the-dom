//See the timer increment every second once the page has loaded.
let counter = document.getElementById("counter");
let counternumber = counter.textContent;
console.log(counternumber);

let seconds = 0;

function count() {
  setInterval(function () {
    seconds += 1;
    counter.textContent = seconds;
  }, 1000);
}

// document.addEventListener("DOMContentLoaded", count);

// Manually increment and decrement the counter using the plus and minus buttons.
let addBtn = document.querySelector("#plus");
addBtn.addEventListener("click", increment);

let btnClick = 0;

function increment() {
  btnClick += 1;
  counter.textContent = btnClick;
}

let subtractBtn = document.querySelector("#minus");

subtractBtn.addEventListener("click", decrement);

function decrement() {
  btnClick -= 1;
  counter.textContent = btnClick;
}

// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
// let likeBtn = document.querySelector("#heart");
// likeBtn.addEventListener("click", likesCount);

// function likesCount() {
//   console.log ("likes")
// }
