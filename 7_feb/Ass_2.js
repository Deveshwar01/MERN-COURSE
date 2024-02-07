// Ask the user for their score
let userScore = prompt("Enter your score:");

// Convert the user input to a number
let score = parseFloat(userScore);

// Check the score and assign a grade
if (score >= 90) {
    alert("Your grade is A.");
} else if (score >= 80) {
    alert("Your grade is B.");
} else if (score >= 70) {
    alert("Your grade is C.");
} else if (score >= 60) {
    alert("Your grade is D.");
} else {
    alert("Your grade is F.");
}
