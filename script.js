// task 1

function sumTwoSmallestNumbers(...args) {
  const sortedArgs = args.sort((a, b) => a - b);

  const firstElement = sortedArgs[0];
  const secondElement = sortedArgs[1];
  const sum = firstElement + secondElement;
  if (args.length < 2) {
    console.error("Your array hasn't 2 elements");
    return;
  }
  return sum;
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77));
console.log(sumTwoSmallestNumbers(2, 3, 0, 10, -10, 20, 16, 18, 9, 1));
console.log(sumTwoSmallestNumbers(10));
