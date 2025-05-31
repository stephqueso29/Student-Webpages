const startButton = document.querySelector('#startButton');
const introScreen = document.querySelector('#introScreen');
const gameScreen = document.querySelector('#game');
const resetButton = document.querySelector('#resetButton');
const cells = document.querySelectorAll('.cell');
const heading = document.querySelector('#heading');

let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;

const checkWinner = () => {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const handleCellClick = (event) => {
  const cellIndex = event.target.getAttribute('data-index');
  if (board[cellIndex] || !gameActive) return;

  board[cellIndex] = currentPlayer;
  event.target.textContent = currentPlayer;

  const winner = checkWinner();
  if (winner) {
    heading.textContent = `${winner} wins!`;
    gameActive = false;
    return;
  }

  if (!board.includes(null)) {
    heading.textContent = 'You both suck!';
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  heading.textContent = `Player ${currentPlayer}'s turn`;
};

const resetGame = () => {
  board = Array(9).fill(null);
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  gameActive = true;
  heading.textContent = "Player X's turn";
};

const startGame = () => {
  introScreen.style.display = 'none';
  gameScreen.style.display = 'block';
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);

heading.textContent = "Player X's turn";
