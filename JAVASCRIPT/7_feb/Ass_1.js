// Ask the user to input a number
let userInput = prompt("Enter a number:");

// Convert the user input to a number
let number = parseFloat(userInput);

// Check if the number is positive, negative, or zero
if (number > 0) {
  alert("The number is positive.");
} else if (number < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}
