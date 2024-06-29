function spin() {
    // Change the status text to "Spinning..."
    document.getElementById("status").innerText = "Spinning...";

    // Select a random player
    let players = document.querySelectorAll("#players li");
    let randomPlayer = randomPlayerSelection(players);

    // Update the status with the selected player after a short delay to simulate spinning
    setTimeout(() => {
        document.getElementById("status").innerText = "Selected : " + randomPlayer;
    }, 2000); // 2 second delay
}

function randomPlayerSelection(players) {
    let randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex].innerText;
}