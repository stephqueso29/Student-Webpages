const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const scoreDisplay = document.getElementById("score");

let isJumping = false;
let score = 0;

// Jump logic
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !isJumping) {
    isJumping = true;
    dino.classList.add("jump");

    setTimeout(() => {
      dino.classList.remove("jump");
      isJumping = false;
    }, 500);
  }
});

// Collision detection and score
const checkCollision = setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("right"));

  // Rock is near the dino horizontally (adjust range if needed)
  if (rockLeft > 520 && rockLeft < 580 && dinoTop < 50) {
    alert("Game Over! Final Score: " + score);
    score = 0;
    scoreDisplay.textContent = "Score: 0";
  } else {
    score++;
    scoreDisplay.textContent = "Score: " + score;
  }
},  100);
  
