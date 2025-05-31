// Variables to keep track of the power level and if the game started
let power = 0;
let direction = 1; // 1 means going up, -1 means going down
let powerInterval = null;
let gameStarted = false;

// Function to start growing the power bar
function startPower() {
    if (gameStarted) return; // if already started, do nothing
    power = 0;
    direction = 1;
    gameStarted = true;

    const powerBar = document.getElementById("powerBar");

    // Change the width of power bar every 20 milliseconds
    powerInterval = setInterval(() => {
        power += direction * 2; // speed up by 2

        // Change direction when hitting 0% or 100%
        if (power >= 100) {
            power = 100;
            direction = -1; // go down
        } else if (power <= 0) {
            power = 0;
            direction = 1; // go up
        }

        // Update the power bar width
        powerBar.style.width = power + "%";
    }, 20);
}

// Function to stop the power bar and calculate the hit
function stopPower() {
    if (!gameStarted) return;
    clearInterval(powerInterval);
    gameStarted = false;

    // Show the strength the player stopped at
    document.getElementById("strength").innerText = "You hit with a strength of: " + power.toFixed(0);

    // Move the puck up based on the power
    let puck = document.getElementById("puck");
    let maxHeight = 300; // height of the game area
    let puckHeight = (power / 100) * maxHeight;
    puck.style.bottom = puckHeight + "px";

    // Show the result message
    if (power >= 90) {
        document.getElementById("result").innerText = "🎉 DING! 🎉You rang the bellussy! ";
    } else {
        document.getElementById("result").innerText = "Not strong enough. Better Luck Next Time!";
    }
}
