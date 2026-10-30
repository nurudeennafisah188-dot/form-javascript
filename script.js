// Select the counter display
const countDisplay = document.getElementById("count");

// Select the buttons
const increaseButton = document.getElementById("increase");
const resetButton = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");

// Set the initial count
let count = 0;

// Increase the count
increaseButton.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

// Reset the count
resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});

// Decrease the count
decreaseBtn.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
});