var block = document.getElementById("block");
var character = document.getElementById("character");
var hole = document.getElementById("hole");
var coin = document.getElementById("coin");
var counter = 0;
var jumping = 0;
var gameOver = false;

// create sort display 
var scoreElement = document.createElement("div");
scoreElement.style.position = "absolute";
scoreElement.style.top = "10px";
scoreElement.style.left = "10px";
scoreElement.style.color = "black";
scoreElement.style.fontSize = "20px";
scoreElement.innerText = "Score: " + counter;
document.getElementById("game").appendChild(scoreElement); 

// Function to update score
function updateScore() {
    scoreElement.innerText = "Score: " + counter;
}

// Function to reset the game
function resetGame() {
    character.style.top = "200px";
    block.style.left = "400px";
    hole.style.left = "400px";
    counter = 0;
    updateScore();
    gameOver = false;
}

// Handles hole and coin movement
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    
    setTimeout(function() {
        random = -((Math.random() * 300) + 200);
        coin.style.top = random + "px";
    }, 1000);
    
    counter++;
    updateScore();
});

// Gravity for character
var gravity = setInterval(function() {
    if (!gameOver) {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (jumping === 0) {
            character.style.top = (characterTop + 3) + "px";
        }
        
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var cTop = -(500 - characterTop);
        
        if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
            // Game over logic - resets game without pop-up
            gameOver = true;
            updateScore(); // Score will still be shown
            setTimeout(resetGame, 1000); // Reset after 1 second
        }
    }
}, 10);

// Jump function
function jump() {
    if (gameOver) return; // Prevents jumping if game is over
    
    let counter = 0;
    jumping = 1;
    var jumpInterval = setInterval(function() {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (counter < 15 && characterTop > 6) {
            character.style.top = (characterTop - 5) + "px";
        }
        
        if (counter > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
        }
        
        counter++;
    }, 10);
}

