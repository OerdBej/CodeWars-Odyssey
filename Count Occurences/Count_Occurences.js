// Write a function that takes in a string and a character and return the number of occurrences of that character in the string.It need to return the number of occurrences of a character in a string. Lowercase and uppercase characters are considered different characters.
//  ```js
// countOccurrences('hello', 'l'); // 2
// countOccurrences('hello', 'z'); // 0
// ```

//1️⃣ Using for loop

function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences("Lorem ipsum dolor sit amet sed diam voluptua.", "l"));
