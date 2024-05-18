// Write a function called calculator that takes in 2 numbers and an operator and returns the result of the calculation. This fucntion must return a number, and must thrugh or log an error if an invalid operator is given```
// Example:
// calculator(1, 2, '+') // 3
// calculator(10, 5, '-') // 5
// calculator(2, 2, '*') // 4
// calculator(10, 5, '/') // 2

//1️⃣ Using Switch Conditional
function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator");
  }

  return result;
}

console.log(calculator(10, 2, "d-"));

//2️⃣ Using if/else conditonals

function calculatorTwo(num1, num2, opeartor) {
  let result;
  if (opeartor === "+") {
    result = num1 + num2;
  } else if (opeartor === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    throw new Error("Invalid Operator");
  }
}

console.log(calculatorTwo(10, 2, "+"));
