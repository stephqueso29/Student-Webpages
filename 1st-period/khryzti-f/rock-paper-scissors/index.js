const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  
  if (playerChoice === computerChoice) {
    result = "its a tie!! ( ꩜ ᯅ ꩜;)⁭ ⁭";
  } else {
    switch (playerChoice) {
      case "rock":
        result = (computerChoice === "scissors") ? "you win!!!  ( •̀ ᗜ •́ )ᕗ" : "you lose ૮(˶ㅠ︿ㅠ)ა";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "you win!!!  ( •̀ ᗜ •́ )ᕗ" : "you lose ૮(˶ㅠ︿ㅠ)ა";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "you win!!!  ( •̀ ᗜ •́ )ᕗ" : "you lose ૮(˶ㅠ︿ㅠ)ა";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
  
  resultDisplay.classList.remove("greenText", "redText", "tieText");

  if (result.includes("win")) {
    resultDisplay.classList.add("greenText");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result.includes("lose")) {
    resultDisplay.classList.add("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  } else {
    resultDisplay.classList.add("tieText");
  }
}
