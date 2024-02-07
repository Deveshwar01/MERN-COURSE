do {
  // Initialize the game
  const targetNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
  let numberOfGuesses = 0;

  console.log("Welcome to the Number Guessing Game!");

  // Guessing Logic
  let guess;
  while (true) {
    guess = parseInt(prompt("Guess the number between 1 and 100:"));

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
    } else {
      numberOfGuesses++;

      if (guess === targetNumber) {
        console.log(
          `Congratulations! You guessed the correct number in ${numberOfGuesses} attempts.`
        );
        break; // Exit the loop if the guess is correct
      } else if (guess < targetNumber) {
        console.log("Too low. Try again!");
      } else {
        console.log("Too high. Try again!");
      }
    }
  }

  // Ending the Game
  const playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
} while (playAgain === "yes");

console.log("Thank you for playing the Number Guessing Game. Goodbye!");
