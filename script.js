const hintText = document.getElementById('hint-text');
const guessInput = document.getElementById('guess-input');
const submitGuess = document.getElementById('submit-guess');
const message = document.getElementById('message');
const guessesCount = document.getElementById('guesses-count');

// Replace this list with a list of NHL players and hints
const players = [
    { name: 'Player 1', hint: 'Hint for player 1' },
    { name: 'Player 2', hint: 'Hint for player 2' },
    { name: 'Player 3', hint: 'Hint for player 3' },
];

let selectedPlayer = getRandomPlayer(players);
let remainingGuesses = 10;

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
