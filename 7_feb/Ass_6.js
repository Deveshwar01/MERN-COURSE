// Display menu options
console.log("Calculator Menu:");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

// Get user's choice
const choice = parseInt(prompt("Enter the number of your choice:"));

// Get two numbers from the user
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Perform the selected operation using a switch statement
let result;
switch (choice) {
    case 1:
        result = num1 + num2;
        break;
    case 2:
        result = num1 - num2;
        break;
    case 3:
        result = num1 * num2;
        break;
    case 4:
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            console.log("Error: Division by zero is not allowed.");
            break;
        }
        break;
    default:
        console.log("Invalid choice. Please choose a number between 1 and 4.");
        break;
}

// Display the result
if (result !== undefined) {
    console.log("Result: " + result);
}
