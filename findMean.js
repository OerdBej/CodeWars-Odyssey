// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// 1. Add all of the numbers\
// 1+3+5+7 = 16

// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
// 16/4 = 4

// 3. The mean (or average) of this list is 4

let findAverage = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  let average = sum / nums.length;

  return average;
};

let anotherFindAverage = function (arr) {
  if (arr.length === 0) return 0;

  return arr.reduce((total, num) => total + num, 0) / arr.length;
};

let numbers = [1, 3, 5, 7];
let result = anotherFindAverage(numbers);
console.log(result); // Output: 4
