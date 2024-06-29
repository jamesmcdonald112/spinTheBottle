document.addEventListener('DOMContentLoaded', () => {
    const playerNameInput = document.getElementById('player-name');
    const addPlayerButton = document.getElementById('add-player');
    const playersList = document.getElementById('players');
    const status = document.getElementById('status');
    const spinButton = document.getElementById('spin');

    addPlayerButton.addEventListener('click', () => {
        const playerName = playerNameInput.value.trim();
        if (!playerName) return;

        const existingPlayers = Array.from(playersList.children).map(li => li.textContent);
        if (existingPlayers.includes(playerName)) {
            status.textContent = "Player already exists!";
            return;
        }

        const li = document.createElement('li');
        li.textContent = playerName;
        playersList.appendChild(li);
        playerNameInput.value = '';
        status.textContent = "Spin the bottle!";
    });

    spinButton.addEventListener('click', () => {
        const players = Array.from(playersList.children);
        if (players.length === 0) {
            status.textContent = "Add players to spin the bottle.";
            return;
        }

        status.textContent = "Spinning...";
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * players.length);
            const selectedPlayer = players[randomIndex].textContent;
            status.textContent = `The bottle points to ${selectedPlayer}!`;
        }, 2000);
    });
});
