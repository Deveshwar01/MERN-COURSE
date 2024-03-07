function sumValidNumbers(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element is a valid number
      if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        sum += arr[i];
      }
    }
  
    return sum;
  }
  
  // Example usage
  const mixedArray = [1, 'two', 3, 'four', 5.5, true, 6];
  const result = sumValidNumbers(mixedArray);
  
  console.log('Sum of valid numbers:', result);
  