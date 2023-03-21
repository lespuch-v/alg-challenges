function adjacentElementsProduct(inputArray) {
  let result = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (result < inputArray[i] * inputArray[i + 1]) {
      result = inputArray[i] * inputArray[i + 1];
    }
  }
  return result;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
