let currentPosition = 3; // Start at the 3rd radio button (checked by default)
const radioButtons = document.querySelectorAll('input[name="position"]'); // Get all radio buttons

// Function to change the selected radio button
function changePosition() {
    // Increment the currentPosition and loop back to 1 after the last position
    currentPosition = (currentPosition % radioButtons.length) + 1;
    
    // Uncheck all radio buttons
    radioButtons.forEach(button => button.checked = false);
    
