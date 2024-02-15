// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//1️⃣ split, map and Number method to convert it

function highAndLow(numbers) {
  const numArray = numbers.split(" ").map(Number);
  const max = Math.max(...numArray);
  const min = Math.min(...numArray);
  return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
