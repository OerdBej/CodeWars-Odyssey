//1️⃣ Complete the solution so that it reverses the string passed into it. 'world'  =>  'dlrow'

function solution(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

console.log(solution("Hello World"));

//2️⃣ Chaining methods
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello World"));

//3️⃣ Array methods
const solutionArray = (s) => [...s].reverse().join("");
console.log(solutionArray("dlroW olleH"));
