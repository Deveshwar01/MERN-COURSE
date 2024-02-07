// Prompt the user to enter values
const valuesToCheck = [
    prompt("Enter an empty string:"),
    prompt("Enter the number 0:"),
    prompt("Enter null:"),
    prompt("Enter undefined:"),
    prompt("Enter NaN:"),
    prompt("Enter the boolean value false:"),
    prompt("Enter a non-empty string:"),
    prompt("Enter any number other than zero:")
];

// Check each value for truthiness or falsiness using a for loop
for (let i = 0; i < valuesToCheck.length; i++) {
    const value = valuesToCheck[i];

    if (value) {
        console.log(`Value ${i + 1}: "${value}" is truthy.`);
    } else {
        console.log(`Value ${i + 1}: "${value}" is falsy.`);
    }
}
