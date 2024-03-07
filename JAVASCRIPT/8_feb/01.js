// Function to add two numbers
function add(x, y) {
    return x + y;
  }
  
  // Function to subtract two numbers
  function subtract(x, y) {
    return x - y;
  }
  
  // Function to multiply two numbers
  function multiply(x, y) {
    return x * y;
  }
  
  // Function to divide two numbers
  function divide(x, y) {
    if (y !== 0) {
      return x / y;
    } else {
      return "Cannot divide by zero";
    }
  }
  
  // Function to perform the calculation based on operator
  function calculate(operator, x, y) {
    switch (operator) {
      case "+":
        return add(x, y);
      case "-":
        return subtract(x, y);
      case "*":
        return multiply(x, y);
      case "/":
        return divide(x, y);
      default:
        return "Invalid operator";
    }
  }
  
  // Example usage
  const operator = "*"; // Change the operator as needed
  const operand1 = 5;
  const operand2 = 3;
  
  const result = calculate(operator, operand1, operand2);
  
  console.log(`${operand1} ${operator} ${operand2} = ${result}`);
  