let playerChoice = '';
let compChoice = '';

function playerSelect(choice) {
  playerChoice = choice;
  game();
  if (['rock', 'paper', 'scissors'].includes(playerChoice)) {
    compare();
  }
}

function game() {
  const options = ['rock', 'paper', 'scissors'];
  compChoice = options[Math.floor(Math.random() * 3)];
}

function compare() {
  let resultText = `Computer chose ${compChoice}. `;

  if (playerChoice === compChoice) {
    resultText += "It's a tie!";
  } 
  else if (
    (playerChoice === 'rock' && compChoice === 'scissors') ||
    (playerChoice === 'paper' && compChoice === 'rock') ||
    (playerChoice === 'scissors' && compChoice === 'paper')
  ) {
    resultText += "You win!";
  } 
  else {
    resultText += "You lose!";
  }

  document.getElementById('result').textContent = resultText;
  document.getElementById('play-again').style.display = 'inline-block';
  document.querySelectorAll('.buttons button').forEach(btn => btn.disabled = true);
}

function resetGame() {
  playerChoice = '';
  compChoice = '';
  document.getElementById('result').textContent = '';
  document.getElementById('play-again').style.display = 'none';
  document.querySelectorAll('.buttons button').forEach(btn => btn.disabled = false);
}
