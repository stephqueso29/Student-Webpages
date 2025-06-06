// This is to select the games board and buttons
let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let turnO = true;// This tracks whos turn it is 
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
// These are the winning patterns based on the index positions of the game board
const winPatterns = [
    [0, 1, 2],// This is the horizontal top
    [0, 3, 6],// This is the vertical left
    [0, 4, 8],// This is the diagonal top left to bottom right
    [1, 4, 7],// This is the vertical center
    [2, 5, 8],// This is the vertical right
    [2, 4, 6],// This is the diagonal top right to bottom left
    [3, 4, 5],// This is the horizontal middle
    [6, 7, 8] // This is the horizontal bottom
];
// This is the event listener to handle clicks for each boxes
boxes.forEach((box) => {
    box.addEventListener('click', function () {
      // This helps prevent clicking on a filled box
        if (box.innerText !== "") return;  
        if (turnO) {
            box.innerText = 'O';// This marks the box with 'O'
            box.style.color = 'red';// It makes 'O' red
            turnO = false;// This helps to switch to Player X's turn
        } else {
            box.innerText = 'X';// This marks the box with 'X'
            box.style.color = 'black';// It makes 'X' black
            turnO = true;// This helps to switch to Player O's turn
        }
        // This helps to disable the box after its been clicked
        box.disabled = true;
        // This checks if the player has won after a move
        checkWinner();
    });
});
// This is a function to enable all boxes for a new game
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;// This helpa enable clicking on all boxes
        box.innerText = "";// This clears any text in the boxes
    }
};
// This function helps to disable all boxes when the game ends
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;// This helps to disable all boxes so they can not be clicked on
    }
};
// This function helps to show the winners message
const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner of this match is ${winner}`;// This helps to display the winner's message
    msgContainer.classList.remove('hide');// This shows the message container
    disableBoxes();// This disables all boxes to stop further play
};
// This function helps to check for a winner or a draw
const checkWinner = () => {
    let hasWin = false;
    // This loops through all winning patterns, to check if there's a match or not
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;// THis gets the value in the first position
        let pos2Val = boxes[pattern[1]].innerText;// This gets the value in the second position
        let pos3Val = boxes[pattern[2]].innerText;// This gets the value in the third position
        // If all of these positions have the same value and are not empty, then there would be a winner
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "" 
            && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);// This shows the winner
            hasWin = true;
            return;// This ends the function once theres a winner
        }
    }
    // This checks if every boxe is filled in and if there's no winner, then it is a draw
    if (!hasWin) {
        const allBoxes = [...boxes].every((box) => box.innerText !== "");// This checks if all the boxes are filled
        if (allBoxes) {       msgContainer.classList.remove('hide');// This shows the message container
            msg.innerText = 'Match was a draw';// This displays the draw message
        }
    }
};
// This the function that helps reset the game 
const resetGame = () => {
    turnO = true;// This resets to Player O's turn
    enableBoxes();// This enables all boxes for a new game
msgContainer.classList.add('hide');// This hides the message container
};
// This ia a event listener to reset the game when the "New Game?" button is clicked on
newGameBtn.addEventListener('click', resetGame);
// This is a event listener to reset the game when the "Reset Game" button is clicked on
resetBtn.addEventListener('click', resetGame);
