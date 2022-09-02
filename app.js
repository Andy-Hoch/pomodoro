let progressElem = document.querySelector(".progress-elem");
let progressElemSvg = document.querySelector(".progress-elem svg");
let progressBar = document.querySelector(".progress-bar");
let success = document.querySelector(".success");
let progressTextContainer = document.querySelector(".progress-text-container");
let progressTextInner = document.querySelector(".progress-text-inner");

let interval;

function startAnimation () {
  clearInterval(interval);
  progressTextInner.innerHTML = 0;
  progressTextContainer.style.display = "";
  success.style.display = "none";
  
  let initial = 251.3274;
  let increment = 251.3274 / 1500;
  let incrementCount = 0;
  interval = setInterval(() => {
    if (incrementCount === 1500) {
      initial = 0;
      progressBar.style.strokeDashoffset = initial;
      clearInterval(interval);
      setTimeout(() => {
        progressTextContainer.style.display = "none";
        success.style.display = "";
      }, 100);
    } else {
      initial -= increment;
      progressBar.style.strokeDashoffset = initial;
      incrementCount += 1;

      if (incrementCount !== 1500) {
        progressTextInner.innerHTML = Math.round(incrementCount / 15);
      }
    }
  }, 1000);
}

startAnimation();

document.querySelector("button").addEventListener("click", () => {
  startAnimation();
});


/*

251.3274

*/