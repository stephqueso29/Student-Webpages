var cps = 0;
var duration = 10;
var startTime;
var ended = true;

var timerTxt = document.getElementById("timer");
var cpsTxt = document.getElementById("cps");
var startBtn = document.getElementById("start");
var clickArea = document.getElementById("clickarea");

function show(elem) {
  elem.style.display = 'inline';
}

function hide(elem) {
  elem.style.display = 'none';
}

function startGame() {
  hide(startBtn);
  cps = 0;
  ended = false;
  startTime = new Date().getTime();

  var timerId = setInterval(function() {
    var total = (new Date().getTime() - startTime) / 1000;

    if (total < duration) {
      timerTxt.textContent = total.toFixed(3);
      cpsTxt.textContent = (cps / total).toFixed(2);
    } else {
      ended = true;
      clearInterval(timerId);
      endGame();
    }
  }, 10);
}

function endGame() {
  var cpsFinal = (cps / duration).toFixed(2);
  timerTxt.textContent = duration.toFixed(3);
  cpsTxt.textContent = cpsFinal;
  show(startBtn);
}

startBtn.addEventListener("click", function() {
  startGame();
});

clickArea.addEventListener("click", function() {
  if (!ended) {
    cps++;
    cpsTxt.textContent = cps;
  }
});
