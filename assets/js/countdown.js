// Set the target date for the countdown (YYYY-MM-DD HH:MM:SS)
const targetDate = new Date('2023-12-31 23:59:59').getTime();

// Update the countdown every 1 second
const interval = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown values
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // Check if the countdown has reached zero
    if (timeLeft < 0) {
        clearInterval(interval); // Stop the countdown
        document.getElementById('countdown').innerHTML = '<h2>Countdown Expired!</h2>';
    }
}, 1000);
