//  Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

const smashIt = (array) => {
  return array.join(" ");
};

const rickRubin = ["Rubin", "is", "a", "renowned", "music", "producer"];
console.log(smashIt(rickRubin));

//Refactoring using destructuring and default parameters to make the function more readable.
const smashItAgain = (array, separator = " ") => array.join(separator);

const rickRubinAgain = ["Rubin", "is", "a", "renowned", "music", "producer"];
console.log(smashIt(rickRubinAgain));

//Refactoring using array

const rickRubin1 = (array) => array.join(" ");
const rickRubinAgain1 = ["Rubin", "is", "a", "renowned", "music", "producer"];
console.log(rickRubin1(rickRubinAgain1));
