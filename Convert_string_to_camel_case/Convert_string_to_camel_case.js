// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

//"the-stealth-warrior" gets converted to "theStealthWarrior"





//1️⃣ The function toCamelCase takes a string as input and converts it into camel case format by removing dashes or underscores and capitalizing the first letter of each word except the first one.

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase("the-stealth-warrior"));