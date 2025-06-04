let score = 0;
let enemyHealth = 100;
let damage = 10;
let currentVirus = null;
let gameInterval;

const holes = document.querySelectorAll(".hole");
const scoreBoard = document.getElementById("score-board");
const healthBar = document.getElementById("health");

const virusImage = 'https://www.avast.com/hs-fs/hubfs/New_Avast_Academy/what_is_scareware_and_how_to_remove_it_academy_refresh_2/Fake-scareware.png?width=450&height=368&name=Fake-scareware.png';
const jumpscare = 'https://www.avast.com/hs-fs/hubfs/New_Avast_Academy/what_is_scareware_and_how_to_remove_it_academy_refresh_2/Fake-scareware.png?width=450&height=368&name=Fake-scareware.png';

const jumpscareDiv = document.createElement('div');
jumpscareDiv.id = 'jumpscare';
jumpscareDiv.style.cssText = `
  display: none; position: fixed; top: 0; left: 0;
  width: 100%; height: 100%; background: black;
  justify-content: center; align-items: center;
  z-index: 9999;
  cursor: pointer;
`;
const jumpscareImg = document.createElement('img');
jumpscareImg.src = 'https://i.redd.it/0rp83hpill071.jpg';
jumpscareImg.style.width = '100%';

jumpscareDiv.appendChild(jumpscareImg);
document.body.appendChild(jumpscareDiv);

function showJumpscare(){
  jumpscareDiv.style.display = 'flex';
  
  jumpscareDiv.addEventListener('click', hideJumpscare);
  
  setTimeout(hideJumpscare, 2000);
}

function hideJumpscare() {
  jumpscareDiv.style.display = 'none';
  jumpscareDiv.removeEventListener('click', hideJumpscare);
}

function randomHole() {
  const index = Math.floor(Math.random() * holes.length);
  return holes[index];
}

function showVirus() {
  const hole = randomHole();
  const virus = document.createElement("img");
  virus.classList.add("virus-img");
  virus.src = virusImage;
  
    // Add click event to the virus image
  virus.addEventListener("click", whackVirus);

  // Add virus image to the hole
  hole.appendChild(virus);
  
  // Show virus after a random time
  let virusTimeout = setTimeout(() => {
    if (virus.style.display = "block"){
      decreaseHealth();
      showJumpscare();
    }
      virus.style.display = "none";
      hole.removeChild(virus);
    }, 1000); // 1 second popup duration
  
    setTimeout(() => {
      virus.style.display = "block";
  }, Math.random() * 2000); // Show after a random delay
  
  virus._timeout = virusTimeout;
}

function whackVirus(e) {
  // Increase score when virus is clicked
  score += 10;
  scoreBoard.textContent = `Score: ${score}`;
  e.target.style.display = "none";
  e.target.parentElement.removeChild(e.target);
  
  clearTimeout(e.target._timeout);
  
  healthBar.value = enemyHealth;
}

  function decreaseHealth() {
    enemyHealth -= damage;
    healthBar.value = enemyHealth;
    
    if (enemyHealth <= 0){
      alert("Your computer is cooked.")
      clearInterval(gameInterval);
    }
  }

// Start the game loop to show virus
function startGame() {
  gameInterval = setInterval(() => {
    showVirus();
  }, 1500); // Virus shows every 1.5 seconds
}

// Start the game
startGame();
