// Select DOM elements (HTML parts we need to change)
const userResult = document.querySelector(".user_result img"); // User choice image
const cpuResult = document.querySelector(".cpu_result img"); // CPU choice image
const resultText = document.querySelector(".result"); // Text that shows who won
const optionImages = document.querySelectorAll(".option_image"); // All choice images

// Choices array (Rock, Paper, Scissors)
const choices = ["rock", "paper", "scissors"];

// Loop through each option image
optionImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        // Remove 'active' class from all choices
        optionImages.forEach(img => img.classList.remove("active"));
        image.classList.add("active"); // Highlight clicked choice

        // Get user choice from 'data-choice' attribute
        let userChoice = image.getAttribute("data-choice");

        // Set user image to the selected option
        userResult.src = image.querySelector("img").src;

        // Generate random CPU choice
        let cpuChoice = choices[Math.floor(Math.random() * 3)];

        // Set CPU image based on choice
        cpuResult.src = document.querySelector(`[data-choice="${cpuChoice}"] img`).src;

        // Determine the result (who wins)
        if (userChoice === cpuChoice) {
            resultText.textContent = "It's a Tie!"; // If both pick the same
        } else if (
            (userChoice === "rock" && cpuChoice === "scissors") || // Rock beats Scissors
            (userChoice === "paper" && cpuChoice === "rock") || // Paper beats Rock
            (userChoice === "scissors" && cpuChoice === "paper") // Scissors beats Paper
        ) {
            resultText.textContent = "OMGOMGOMG you win!"; // User wins
        } else {
            resultText.textContent = "You Lose! loser"; // User loses
        }
    });
});


