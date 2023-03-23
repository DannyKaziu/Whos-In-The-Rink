const hintText = document.getElementById('hint-text');
const guessInput = document.getElementById('guess-input');
const submitGuess = document.getElementById('submit-guess');
const message = document.getElementById('message');
const guessesCount = document.getElementById('guesses-count');

// Replace this list with a list of NHL players and hints
const players = [
    { name: 'Auston Matthews', hint: 'One of Toronto Maple Leafs 1st Overall Pick' },
    { name: 'Wayne Gretzky', hint: 'Played for 4 Franchises, Oilers, Rangers, Blues and Kings' },
    { name: 'Brandon Montour', hint: 'Keeghan Beats Off To This Player Every Night He Plays On His Fantasy Team' },
];

let selectedPlayer = getRandomPlayer(players);
let remainingGuesses = 8;

function getRandomPlayer(players) {
    return players[Math.floor(Math.random() * players.length)];
}

function updateGameState() {
    guessesCount.textContent = remainingGuesses;
}

hintText.textContent = selectedPlayer.hint;

submitGuess.addEventListener('click', () => {
    const guess = guessInput.value.trim();
    
    if (guess.toLowerCase() === selectedPlayer.name.toLowerCase()) {
        message.textContent = 'Congratulations! You guessed the correct player!';
        submitGuess.disabled = true;
    } else {
        remainingGuesses--;
        if (remainingGuesses > 0) {
            message.textContent = 'Incorrect! Try again
