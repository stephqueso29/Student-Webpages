let greenLight = true;
let isMoving = false;
let playerX = 0;
let playerY = 0;
let xPos = 0;
let Victory = false;
let gameOver = false;
let isCooldown = false;
let redLight = Date.now();

const movable = document.getElementById('movable');
const restartBtn = document.getElementById('restart-btn');
xPos = 10;

function updatePosition() {
  movable.style.left = xPos + 'px';
}

document.addEventListener('keydown', function(event) {
  const step = 10;
  switch(event.key) {
	case 'ArrowRight':
  	if (!gameOver && !Victory) {
    	isMoving = true;
    	xPos += step;
    	RedLightGenerator();
    	if (xPos > 1000) {
      	console.log('winner');
      	Victory = true;
      	showRestartButton('winner');
    	}
  	}
  	break;
  }
  updatePosition();
});

document.addEventListener('keyup', function(event) {
  isMoving = false;
});


function Lightred() {
  setTimeout(() => {
	let interval = setInterval(() => {
  	if (Date.now() - redLight >= 5000) clearInterval(interval);
  	if (isMoving) {
    	console.log('Game Over');
    	showRestartButton('gameOver');
    	clearInterval(interval);
    	gameOver = true;
  	}
	}, 100);
  }, 1000);
}

function RedLightGenerator() {
  if (isCooldown === true) return;
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber === 7) {
	console.log('REDLIGHT')
	redLight = Date.now();
  lightbox.style.backgroundColor = 'red';
	Lightred();
	isCooldown = true;
	setTimeout(() => {
  console.log('greenlight');
  lightbox.style.backgroundColor = '#32CD32';

  	isCooldown = false;
	}, 5000);
  }
}

function showRestartButton(status) {
  restartBtn.style.display = 'block';
  if (status === 'gameOver') {
	restartBtn.textContent = 'Game Over! Do you want to try again?';
  } else if (status === 'winner') {
	restartBtn.textContent = 'You Won! Do you want to play again?';
  }
}

restartBtn.addEventListener('click', function() {
  Victory = false;
  gameOver = false;
  xPos = 0;
  updatePosition();
  restartBtn.style.display = 'none';
  lightbox.style.backgroundColor = 'white';

});


