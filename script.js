const display = document.querySelector(".display");
const btn = document.querySelector(".btn");

const quatesArr = [
  "Life is what happens when you’re busy making other plans.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Never let the fear of striking out keep you from playing the game.",
  "You must not ever stop being whimsical. And you must not, ever, give anyone else the responsibility for your life.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Life is really simple, but we insist on making it complicated",
];

btn.addEventListener("click", function () {
  const randomQuate = Math.floor(Math.random() * quatesArr.length);
  console.log(randomQuate);
  display.innerHTML = quatesArr[randomQuate];
});
