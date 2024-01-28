// Challenge 1:

/**
 * Create a function with two arguments that will return an array of the first n multiples of x.
 * Assume both the given number and the number of times to count will be positive numbers greater than 0.
 * Return the results as an array or list (depending on language).
 */

function countBy(x, n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }

  return result;
}

// Examples:
console.log(countBy(1, 10));

//2️⃣ Using the map function 2️⃣

function countBy1(x, n) {
  return Array.from({ length: n }, (_, index) => x * (index + 1));
}

console.log(countBy1(11, 10));
