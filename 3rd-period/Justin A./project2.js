
function flagCell(event) {
    event.preventDefault();
    if (gameOver) return;
    const index = parseInt(event.target.dataset.index);
    
    if (!event.target.classList.contains("revealed")) {
        if (event.target.textContent === "🚩") {
            event.target.textContent = "";
        } else {
            event.target.textContent = "🚩";
        }
    }
}


document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("contextmenu", flagCell);
});
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("introScreen").style.display = "none"; 
    document.getElementById("game-container").style.display = "block"; 
    createBoard(); 
});




