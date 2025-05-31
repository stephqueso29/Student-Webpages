const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

const data = [
  { name: "apple", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
  { name: "banana", image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
  { name: "grapes", image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg" },
  { name: "strawberry", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg" },
  { name: "cherry", image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg" },
  { name: "watermelon", image: "https://static.vecteezy.com/system/resources/previews/030/695/439/non_2x/watermelon-2d-cartoon-illustraton-on-white-background-high-free-photo.jpg" },
  { name: "kiwi", image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg" },
  { name: "pineapple", image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg" }
];

function startGame() {
  cards = [...data, ...data]; // duplicate for pairs
  shuffleCards();
  generateCards();
}

function shuffleCards() {
  let currentIndex = cards.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
  }
}

function generateCards() {
  gridContainer.innerHTML = "";
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src="${card.image}" alt="${card.name}" />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function restart() {
  score = 0;
  document.querySelector(".score").textContent = score;
  startGame();
}

startGame();
