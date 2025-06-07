// this is where we set all of the values 
let score = 0;
let upgradeLevel = 0;
let upgradeCost = 15;
let autoClickers = 0;
let autoCost = 30;
let biteCount = 0;

// this is where all of the cookie images are held
let cookieImages = [
'https://www.pngall.com/wp-content/uploads/14/Cookie-Monster-PNG-Images.png','https://static.vecteezy.com/system/resources/thumbnails/044/279/881/small/chocolate-chips-on-cookie-on-transparent-background-png.png', 'https://static.vecteezy.com/system/resources/thumbnails/050/479/411/small/bite-taken-from-a-chocolate-chip-cookie-cut-out-stock-png.png', 'https://static.vecteezy.com/system/resources/previews/049/950/041/non_2x/cookie-with-a-bite-taken-out-of-it-cut-out-transparent-png.png','https://spaces-cdn.clipsafari.com/irp095ztskrvq3yjykjg1o559a5q', 'https://static.vecteezy.com/system/resources/thumbnails/049/950/046/small/delicious-chocolate-chip-cookie-with-a-bite-taken-cut-out-transparent-png.png', 'https://pngimg.com/d/cookie_PNG13664.png', 'https://static.vecteezy.com/system/resources/previews/027/291/607/non_2x/cookie-isolated-on-transparent-background-free-png.png', 'https://pngimg.com/d/cookie_PNG13656.png' ,'https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-the-gingerbread-man-png-image_10163077.png'
];
// here we are declaring and initializing all of the functions
const scoreDisplay = document.getElementById("score");
const upgradeCostDisplay = document.getElementById("upgradeCost");
const autoCostDisplay = document.getElementById("autoCost");
const rankDisplay = document.getElementById("rank");
const cookieImg = document.getElementById("cookie");
cookieImg.addEventListener("click", clickCookie);

// this is the function that holds and adds the score
function clickCookie() {
  score += 1 + upgradeLevel;
  scoreDisplay.textContent = score;

// this part is the code for the fading of the cookie as it is clicked
  biteCount++;
  cookieImg.style.opacity = 1 - (biteCount * 0.2);
  if (biteCount >= 5) {
    biteCount = 0;
    cookieImg.style.opacity = 1;
    cookieImg.src = cookieImages[upgradeLevel % cookieImages.length];
  }

  updateRank();
}
// this function holds the code for the upgrades (when the score is more than the upgrade cost, you are able to purchase it and the cost is subtracted from the amount of cookies you have)
function buyUpgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    upgradeLevel++;
    upgradeCost *= 2;
    cookieImg.src = cookieImages[upgradeLevel % cookieImages.length];
    updateUI();
  }
}
// this function holds the code for the auto clicker (you can buy it when you have enough score and then the cost is subtracted from your amount of cookies while also doubling the cost)
function buyAutoClicker() {
  if (score >= autoCost) {
    score -= autoCost;
    autoClickers++;
    autoCost *= 2;
    updateUI();
  }
}
// this holds the values/costs of the score, upgrade cost, and autoclicker cost
function updateUI() {
  scoreDisplay.textContent = score;
  upgradeCostDisplay.textContent = upgradeCost;
  autoCostDisplay.textContent = autoCost;
}
// this function holds all of the ranks and when a certain score is hit, it will update the ranks
function updateRank() {
  let rank = "Bronze";
  if (score >= 100000) rank = "GOAT";
  else if (score >= 5000) rank = "Diamond";
  else if (score >= 1000) rank = "Gold";
  else if (score >= 250) rank = "Silver";
    cookieImages[1];
    
  
  rankDisplay.textContent = `Rank: ${rank}`;
}

setInterval(() => {
  score += autoClickers;
  scoreDisplay.textContent = score;
  updateRank();
}, 1000);
