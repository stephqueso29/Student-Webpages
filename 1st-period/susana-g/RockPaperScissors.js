// Select DOM elements (HTML parts we need to change)
const userResult = document.querySelector(".user_result img"); // User's selection
const cpuResult = document.querySelector(".cpu_result img"); // CPU's selection
const resultText = document.querySelector(".result"); // Game result text
const optionImages = document.querySelectorAll(".option_image"); // All selection images

const choices = ["rock", "paper", "scissors"]; // Choices array

optionImages.forEach((image) => {
    image.addEventListener("click", () => {
        optionImages.forEach(img => img.classList.remove("active"));
        image.classList.add("active"); // Highlight selected choice

        let userChoice = image.getAttribute("data-choice"); // Get user choice
        userResult.src = image.querySelector("img").src; // Update user image

        let cpuChoice = choices[Math.floor(Math.random() * 3)]; // CPU random choice
        cpuResult.src = document.querySelector(`[data-choice="${cpuChoice}"] img`).src;

        // Determine game result
        if (userChoice === cpuChoice) {
            resultText.textContent = "It's a Tie!";
        } else if (
            (userChoice === "rock" && cpuChoice === "scissors") ||
            (userChoice === "paper" && cpuChoice === "rock") ||
            (userChoice === "scissors" && cpuChoice === "paper")
        ) {
            resultText.textContent = "OMG! You Win!";
        } else {
            resultText.textContent = "Haha, You Lose!";
        }
    });
});
