var trainSpeed = 50;                // Initial animation speed in milliseconds (lower is faster)
var trainPosition = 0;               // Starting position of the train (in pixels)
var animation;                      // Variable to store the interval ID controlling animation

var train = document.getElementById("train");           // Get the train element from the DOM
train.addEventListener("click", speedUp);               // Add click listener to speed up train

var stopButton = document.getElementById("stopButton"); // Get the stop button element
stopButton.addEventListener("click", stopTrain);        // Add click listener to stop the train

function speedUp() {
    if (trainSpeed > 50) {           // Only speed up if trainSpeed is above minimum threshold
        trainSpeed -= 50;            // Decrease interval time, which speeds up the animation
    }
    console.log("train speed: " + trainSpeed); // Log current speed for debugging

    clearInterval(animation);        // Clear any existing animation interval
    animation = setInterval(frame, trainSpeed); // Start new interval with updated speed

    function frame() {
        trainPosition += 2;           // Move train 2 pixels to the right each frame
        train.style.left = trainPosition + 'px'; // Update the CSS 'left' property to move the train
        console.log(trainPosition);  // Log current position for debugging
        checkPosition(trainPosition); // Check if train reached crash position
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 160) {   // If train reaches 260px position (crash point)
        alert("Mind the gap!");             // Alert user about the crash
        console.log("Expect delays!");       // Log crash event
        clearInterval(animation);    // Stop the animation
    }
}

function stopTrain() {
    if (trainPosition < 260) {       // Only stop train if it hasn't crashed yet
        clearInterval(animation);    // Stop the animation interval
    }
}
