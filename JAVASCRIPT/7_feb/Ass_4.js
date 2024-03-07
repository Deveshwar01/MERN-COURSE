// Ask the user for a number
let userNumber = prompt("Enter a number:");

// Convert the user input to a number
let number = parseFloat(userNumber);

// Check if the input is a valid number
if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    // Display the multiplication table for the entered number
    console.log(`Multiplication Table for ${number}:`);

    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} * ${i} = ${result}`);
    }
}
