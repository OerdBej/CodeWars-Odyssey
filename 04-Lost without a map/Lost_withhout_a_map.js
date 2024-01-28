// Given an array of integers, return a new array with each value doubled. [1, 2, 3] --> [2, 4, 6]

//1️⃣ solution

function maps(x) {
  return x.map((item) => item * 2);
}

const inputArray = [1, 2, 3, 4, 5, 6];
const result = maps(inputArray);
console.log(result);

//2️⃣ solution using a map function 

const maps = (x) => x.map((item) => item * 2);
const inputArray2 = [1, 2, 3, 4, 5, 6];
const result2 = maps(inputArray2);
console.log(result2);
