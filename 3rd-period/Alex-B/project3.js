const gridSize = 10;
const mineCount = 10;
let grid = document.getElementById("grid");
let mines = new Set();
let board = Array(gridSize * gridSize).fill(0);
let gameOver = false;
let firstClick = true;

document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("introScreen").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  createBoard();
});

function getRandomCell() {
  return Math.floor(Math.random() * gridSize * gridSize);
}

function placeMines(excludeIndex) {
  mines.clear();
  board.fill(0);
  while (mines.size < mineCount) {
    let minePosition = getRandomCell();
    if (!mines.has(minePosition) && minePosition !== excludeIndex) {
      mines.add(minePosition);
      board[minePosition] = -1;
      updateShoulderCounts(minePosition);
    }
  }
}

function updateShoulderCounts(mineIndex) {
  const directions = [-1, 1, -gridSize, gridSize, -gridSize - 1, -gridSize + 1, gridSize - 1, gridSize + 1];
  directions.forEach(offset => {
    const shoulderIndex = mineIndex + offset;
    if (
      shoulderIndex >= 0 &&
      shoulderIndex < gridSize * gridSize &&
      !mines.has(shoulderIndex)
    ) {
      board[shoulderIndex]++;
    }
  });
}

function createBoard() {
  grid.innerHTML = "";
  gameOver = false;
  firstClick = true;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.dataset.index = i;
    cellElement.addEventListener("click", revealCell);
    grid.appendChild(cellElement);
  }
}

function revealCell(event) {
  if (gameOver) return;
  const index = parseInt(event.target.dataset.index);
  if (firstClick) {
    placeMines(index);
    firstClick = false;
  }
  if (mines.has(index)) {
    event.target.classList.add("mine");
    event.target.textContent = "💣";
    gameOver = true;
    document.querySelectorAll(".cell").forEach(cell => (cell.style.pointerEvents = "none"));
  } else {
    event.target.style.backgroundColor = "gray";
    if (board[index] > 0) {
      event.target.textContent = board[index];
    }
  }
}

function restartGame() {
  mines.clear();
  board = Array(gridSize * gridSize).fill(0);
  createBoard();
}
