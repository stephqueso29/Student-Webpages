let secretNumber = null; //no value rn
let guesses = []; 
let attempts = 0;

// this function will show the choosing display and block the random guess
function startChoosingMode() {
    document.getElementById("modeSelection").textContent = "You are choosing the secret number!";
    document.getElementById("choosingMode").style.display = "block";  //makes choosing visable
    document.getElementById("guessingMode").style.display = "none";  //makes guess unvisable
}


function startRandomMode() {
    document.getElementById("modeSelection").textContent = "The game will choose the secret number!";
    document.getElementById("choosingMode").style.display = "none";
    document.getElementById("guessingMode").style.display = "block";
    secretNumber = Math.floor(Math.random() * 100) + 1; 
    document.getElementById("message").textContent = "Guess the number between 1 and 100!";
    guesses = [];  
    attempts = 0; 
}

// make secret nuber
function setSecretNumber() {
    let chosenNumber = document.getElementById("secretNumber").value;
    if (chosenNumber < 1 || chosenNumber > 100 || isNaN(chosenNumber)) { //if number is less than one, more than 100, or not a number
        alert("Please enter a valid number between 1 and 100!");
        return;
    }
    //this will display only after you choose a secret number 
    secretNumber = Number(chosenNumber);
    document.getElementById("message").textContent = "The secret number has been set! Now the other player can guess.";
    document.getElementById("choosingMode").style.display = "none";  //removes the input box for choosing a number to the guessing input
    document.getElementById("guessingMode").style.display = "block";
    guesses = [];  // reset the guesses and attempts
    attempts = 0;  
}

// check guess
function checkGuess() {
    let userGuess = document.getElementById("userGuess").value; 
    userGuess = Number(userGuess);

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) { 
        document.getElementById("message").textContent = "Please enter a valid number between 1 and 100!";
        return;
    }

    attempts++;
    guesses.push(userGuess); 

    if (userGuess < secretNumber) {
        document.getElementById("message").textContent = "Too low! Try again.";
    } else if (userGuess > secretNumber) {
        document.getElementById("message").textContent = "Too high! Try again.";
    } else {
        document.getElementById("message").textContent = `Correct! You guessed it in ${attempts} tries.`; 
        document.getElementById("guessHistory").textContent = "Your guesses: " + guesses.join(", ");
      let historyText = "Your guesses: ";
        for (let i = 0; i < guesses.length; i++) {
            historyText += guesses[i];  
            if (i < guesses.length - 1) { 
                historyText += ", ";
            }
        }
    }

    document.getElementById("userGuess").value = ""; //after every guess the input box is back to empty
}
