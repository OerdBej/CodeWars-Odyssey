// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//  'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']

// 1️⃣ -

function solution(str) {
  if (str.length % 2 !== 0) {
    str += "_";
  }

  let pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(str.slice(i, i + 2));
  }

  return pairs;
}

// Example usage:
console.log(solution("abc"));
