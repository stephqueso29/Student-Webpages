const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "LightGreen";
const paddle1Color = "darkblue";
const paddle2Color = "Red";
const paddleBorder = "Black";
const ballBorderColor = "Black";
const ballRadius = 7.5;
let paddleSpeed = 50;
let stuck = 0;
let stuck2 = 0;
let intervalID;
let ball1Speed = 1;
let ball2Speed = 1;
let ball1X = gameWidth / 2;
let ball1Y = gameHeight / 2;
let ball1XDirection = 0;
let ball1YDirection = 0;
let ball2X = gameWidth / 2;
let ball2Y = gameHeight / 2;
let ball2XDirection = 0;
let ball2YDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
  width: 25,
  height: 100,
  x: 0,
  y: 0
};
let paddle2 = {
  width: 25,
  height: 100,
  x: gameWidth - 25,
  y: gameHeight - 100
};
window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();
drawPaddles();
function gameStart(){
  createBall();
  nextTick();
  
  
};//this is to start the game
function nextTick(){
  intervalID = setTimeout(() => {
    clearBoard();
    drawPaddles();
    moveBall();
    drawBall(ball1X, ball1Y, ball2X, ball2Y);
    checkCollision();
    nextTick();
    
    
    
  }, 10);
};//this is to decide what should happen after every cycle in the code
function clearBoard(){
  ctx.fillStyle = boardBackground;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
  
};//this is to clear the board
function drawPaddles(){
  
  ctx.strokeStyle = paddleBorder;
  
  ctx.fillStyle = paddle1Color;
  ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
  
    ctx.fillStyle = paddle2Color;
  ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};//this is to draw the side blockers 
function createBall(){
  ball1Speed = Math.random();
  ball2Speed = Math.random();
  if(ball1Speed < 0.5){
    ball1Speed += 0.5;
  }
  if(ball2Speed < 0.5){
    ball2Speed += 0.5;
  }
  if(Math.round(Math.random()) == 1){
    ball1XDirection = 1;
  }
  else{
    ball1XDirection = -1;
  }
  if(Math.round(Math.random()) == 1){
    ball1YDirection = Math.random() + 0.5;
  }
  else{
    ball1YDirection = -(Math.random()) - 0.5;
  }
  
  if(Math.round(Math.random()) == 1){
    ball2XDirection = Math.random() + 0.5;
  }
  else{
    ball2XDirection = -(Math.random()) - 0.5;
  }
  if(Math.round(Math.random()) == 1){
    ball2YDirection = 1;
  }
  else{
    ball2YDirection = -1;
  }
  if(ball1XDirection = ball2XDirection){
    ball2XDirection *= -1;
  }
  ball1X = gameWidth / 2;
  ball1Y = gameHeight / 2;
  ball2X = gameWidth / 2;
  ball2Y = gameWidth / 2;
  drawBall(ball1X, ball1Y, ball2X, ball2Y);
};//this is to summon/create the 2 balls
function moveBall(){
  if(ball1Speed < 20){
  ball1X += (ball1Speed * ball1XDirection);
  ball1Y += (ball1Speed * ball1YDirection);
  };
  if(ball2Speed < 20){
  ball2X += (ball2Speed * ball2XDirection);
  ball2Y += (ball2Speed * ball2YDirection);
};
};//this is to decide how the ball should move and continue moving
function drawBall(ball1X, ball1Y, ball2X, ball2Y){
  ctx.fillStyle = "forestGreen";
  ctx.strokeStyle = ballBorderColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(ball1X, ball1Y, ballRadius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  
  ctx.fillStyle = "purple";
  ctx.strokeStyle = ballBorderColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(ball2X, ball2Y, ballRadius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
};//this is to draw the balls
function checkCollision(){
  if(ball1Y <= 0 + ballRadius){
    ball1YDirection *= -1;
  }
  if(ball1Y >= gameHeight - ballRadius){
    ball1YDirection *= -1;
  }
  if(ball1X <= 0){
    player2Score +=1;
    updateScore();
    createBall();
    return;
  }
  if(ball1X >= gameWidth){
    player1Score +=1;
    updateScore();
    createBall();
    return;
  }
  if(ball1X <= (paddle1.x + paddle1.width + ballRadius)){
    if(ball1Y > paddle1.y && ball1Y < paddle1.y + paddle1.height){
      ball1XDirection *= -1;
      
        ball1Speed += 0.25;
    stuck++;  
    }
    
  }
  
  if(ball1X >= (paddle2.x - ballRadius)){
    if(ball1Y > paddle2.y && ball1Y < paddle2.y + paddle2.height){
      ball1XDirection *= -1;
      
        ball1Speed += 0.25;
      stuck++
    }
  }
  if(ball1X >= (paddle1.x + paddle1.width + ballRadius) && ball1X <= (paddle2.x - ballRadius)){
    stuck = 0;
  }
  
  
  if(ball2Y <= 0 + ballRadius){
    ball2YDirection *= -1;
  }
  if(ball2Y >= gameHeight - ballRadius){
    ball2YDirection *= -1;
  }
  if(ball2X <= 0){
    player2Score +=1;
    updateScore();
    createBall();
    return;
  }
  if(ball2X >= gameWidth){
    player1Score +=1;
    updateScore();
    createBall();
    return;
  }
  if(ball2X <= (paddle1.x + paddle1.width + ballRadius)){
    if(ball2Y > paddle1.y && ball2Y < paddle1.y + paddle1.height){
      
      ball2XDirection *= -1;
      ball2Speed += 0.25;
      stuck2++;
    }
  }
  if(ball2X >= (paddle2.x - ballRadius)){
    if(ball2Y > paddle2.y && ball2Y < paddle2.y + paddle2.height){
      
      ball2XDirection *= -1;
      ball2Speed += 0.25;
      stuck2++;
    }
  }
  if(ball2X >= (paddle1.x + paddle1.width + ballRadius) && ball2X <= (paddle2.x - ballRadius)){
    stuck2 = 0;
  }
  
  if(stuck > 5){
    ball1X = gameWidth / 2;
    ball1Y = gameHeight / 2;
    ball1Speed = (ball1Speed/2);
    ball1XDirection = -(ball1XDirection);
    stuck = 0;
    
  }
  if(stuck2 > 5){
    ball2X = gameWidth / 2;
    ball2Y = gameHeight / 2;
    ball2Speed = (ball2Speed/2);
    ball2XDirection = -(ball2XDirection);
    stuck2 = 0;
    
  }
  
};//this is to check if the ball has touched the side blockers or roof/floor. it makes it so they bounce correctly off these surfaces
function changeDirection(event){
  const keyPressed = event.keyCode;
  console.log(keyPressed);
  const paddle1Up = 87;
  const paddle1Down = 83;
  const paddle2Up = 38;
  const paddle2Down = 40;
  
  switch(keyPressed){
      case(paddle1Up):
        if(paddle1.y > 0){
          paddle1.y -= paddleSpeed;
        }
        
        break;
      case(paddle1Down):
        if(paddle1.y < gameHeight - paddle1.height){
          paddle1.y += paddleSpeed;
        }
       
        break;
      case(paddle2Up):
        if(paddle2.y > 0){
          paddle2.y -= paddleSpeed;
        }
        
        break;
      case(paddle2Down):
        if(paddle2.y < gameHeight - paddle2.height){
          paddle2.y += paddleSpeed;
        }
       
        break;
  }
  
};//this is to move the side blockers
function updateScore(){
  scoreText.textContent = `${player1Score} : ${player2Score}`
  
};//this is the update the score
function resetGame(){
  player1Score = 0;
  player2Score = 0;
  let paddle1 = {
  width: 25,
  height: 100,
  x: 0,
  y: 0
};
let paddle2 = {
  width: 25,
  height: 100,
  x: gameWidth - 25,
  y: gameHeight - 100
};
  ball1Speed = Math.random();
  ball1X = 0;
  ball1Y = 0;
  ball1XDirection = 0;
  ball1YDirection = 0;
  ball2Speed = Math.random();
  ball2X = 0;
  ball2Y = 0;
  ball2XDirection = 0;
  ball2YDirection = 0;
  updateScore();
  clearInterval(intervalID);
  gameStart();
  console.log(ball1Speed);
  console.log(ball2Speed);
};//this is to give the reset button a purpose
wss
