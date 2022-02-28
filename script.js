// task 1

// function sumTwoSmallestNumbers(...args) {
//   const sortedArgs = args.sort((a, b) => a - b);

//   const firstElement = sortedArgs[0];
//   const secondElement = sortedArgs[1];
//   const sum = firstElement + secondElement;
//   if (args.length < 2) {
//     console.error("Your array hasn't 2 elements");
//     return;
//   }
//   return sum;
// }

// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77));
// console.log(sumTwoSmallestNumbers(2, 3, 0, 10, -10, 20, 16, 18, 9, 1));
// console.log(sumTwoSmallestNumbers(10));

// task 2

function createCalculator(value) {
  return {
    sum: function (newValue) {
      value += newValue;
      return value;
    },
    mult: function (newValue) {
      value *= newValue;
      return value;
    },
    sub: function (newValue) {
      value -= newValue;
      return value;
    },
    div: function (newValue) {
      value /= newValue;
      return value;
    },
  };
}
const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
