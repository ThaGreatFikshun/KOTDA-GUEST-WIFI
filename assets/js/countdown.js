$(document).ready(function() {
    // Set the countdown time to 2 minutes (120 seconds)
    var countdownTime = 120;
 
    // Update the countdown timer every second
    var countdownInterval = setInterval(updateCountdown, 1000);
 
    function updateCountdown() {
        // Calculate the minutes and seconds remaining
        var minutes = Math.floor(countdownTime / 60);
        var seconds = countdownTime % 60;
 
        // Display the minutes and seconds on the countdown timer
        $("#minutes").text(minutes.toString().padStart(2, "0"));
        $("#seconds").text(seconds.toString().padStart(2, "0"));
 
        // Decrease the countdown time by 1 second
        countdownTime--;
 
        // If the countdown reaches 0, stop the timer and display a message
        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            $("#timer").html("<button>Connect</button>");
        }
    }
});