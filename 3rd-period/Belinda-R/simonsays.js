//initials all the HTML documents for the functions, gameSequences, level, score, buttons and colors
document.addEventListener("DOMContentLoaded", () => {
  const colorButtons = document.querySelectorAll(".color-button");
  const startButton = document.getElementById("start-button");
  const levelDisplay = document.getElementById("level");
  const scoreDisplay = document.getElementById("score");
  const levelUpModal = document.getElementById("level-up-modal");
  const levelUpMessage = document.getElementById("level-up-message");
  const nextLevelButton = document.getElementById("next-level-button");

  let gameSequence = [];
  let userSequence = [];
  let level = 1;
  let score = 0;
  let canClick = false;
  let colors = ["red", "green", "blue", "yellow"]; // Initial four colors
  let levelThresholds = [5, 10, 15]; // Coins needed to level up

  function getRandomColor() { //returns random color from the array of colors
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function flashColor(colorId) {
    const button = document.getElementById(colorId);
    button.classList.add("active");
    setTimeout(() => {
      button.classList.remove("active");
    }, 500); // this function is to work by click or play by the player to highlight the color
  }

  function playSequence() {
    canClick = false;//disables the player clicks
    let i = 0;
    const interval = setInterval(() => {
      flashColor(gameSequence[i]);
      i++; //short delay
      if (i >= gameSequence.length) {
        clearInterval(interval);
        canClick = true;//allows the player to click after the sequence has been played
      }
    }, 800);
  }

  function handleColorClick(event) {
    if (!canClick) return;//able to click on the color buttons

    const clickedColor = event.target.dataset.color;//adds the color to the sequence
    userSequence.push(clickedColor);
    flashColor(clickedColor);//flashes the click button

    if (userSequence.length === gameSequence.length) {
      if (checkSequence()) {
        score++;//once the sequence match then score increases and updates the game score/level
        scoreDisplay.textContent = `Score: ${score}`;
        setTimeout(nextRound, 1000);
      } else {
        endGame();//if it doesn't match the game ends
      }
    } else {
      const currentIndex = userSequence.length - 1;
      if (userSequence[currentIndex] !== gameSequence[currentIndex]) {
        endGame();
      }
    }
  }

  function checkSequence() {
    return userSequence.every((color, index) => color === gameSequence[index]);
  }//returns true back to the players sequences matches the game sequence

  function nextRound() {
    userSequence = [];//clears the players sequence
    gameSequence.push(getRandomColor()); //add colors to the game
    playSequence(); 

    if (level < 3 && score >= levelThresholds[level - 1]) {
      levelUp();//would include the funtion to level up
    }
  }

  function levelUp() {
    level++;//increase and moves up the level and update the level display
    levelDisplay.textContent = `Level: ${level}`;
    levelUpModal.style.display = "flex";
    levelUpMessage.textContent = `Reach ${
      levelThresholds[level - 1] - score
    } more coins to reach Level ${level + 1}.`;

    if (level === 2) {
      colors.push("purple");//added colors
      addPurpleAndOrangeButtons(); // Ensure the variables are visible
    } else if (level === 3) {
      colors.push("orange");//added colors
    }
  }

  function addPurpleAndOrangeButtons() {//theses added colors allows them to be visble to the player
    const gameBoard = document.querySelector(".game-board");
    const purpleButton = document.getElementById("purple");
    const orangeButton = document.getElementById("orange");

    if (purpleButton && orangeButton) {
      purpleButton.style.display = "block";
      orangeButton.style.display = "block";
    }
  }

  nextLevelButton.addEventListener("click", () => {
    levelUpModal.style.display = "none";
    nextRound();//helps to start the next roud using the event listener to continue button
  });

  function startGame() {
    gameSequence = [];//resets the game including score,level,sequences
    userSequence = [];
    level = 1;
    score = 0;
    levelDisplay.textContent = `Level: ${level}`;
    scoreDisplay.textContent = `Score: ${score}`;
    colors = ["red", "green", "blue", "yellow"]; // Hide extra buttons at the start
    const purpleButton = document.getElementById("purple"); ///starts the round by adding a color
    const orangeButton = document.getElementById("orange");
    if (purpleButton) purpleButton.style.display = "none";
    if (orangeButton) orangeButton.style.display = "none";
    gameSequence.push(getRandomColor());
    playSequence();
  }

  function endGame() {
    alert(`Game Over! Your final score was ${score} at Level ${level}.`);
    startGame();//what displays an alert that the game has ended and restarts the game
  }

  startButton.addEventListener("click", startGame);//addes a click listner to the start button
  colorButtons.forEach((button) => {//adds to the colorbuttons to the players input
    button.addEventListener("click", handleColorClick);
  });
});
