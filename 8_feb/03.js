const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to play one round of the number guessing game
function playRound() {
  const secretNumber = generateRandomNumber(1, 10);
  let attempts = 0;

  function askForGuess() {
    rl.question('Guess the number between 1 and 10:', (input) => {
      const guess = parseInt(input, 10);

      if (isNaN(guess)) {
        console.log('Please enter a valid number.');
        askForGuess();
      } else {
        attempts++;

        if (guess === secretNumber) {
          console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
          rl.close();
        } else {
          console.log('Incorrect guess. Try again.');
          askForGuess();
        }
      }
    });
  }

  askForGuess();
}

// Function to run the number guessing game for a specified number of rounds
function runGame(rounds) {
  const scores = [];

  function playNextRound() {
    if (rounds > 0) {
      playRound();
      rounds--;
      playNextRound();
    } else {
      displayScores(scores);
    }
  }

  playNextRound();
}

// Function to display scores at the conclusion of the game
function displayScores(scores) {
  console.log('Game Scores:');
  scores.forEach((score, index) => {
    console.log(`Round ${index + 1}: ${score} attempts`);
  });
}

// Example usage
const numberOfRounds = 3;
const gameScores = [];

runGame(numberOfRounds);
