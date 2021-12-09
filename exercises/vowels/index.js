// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = [..."aeiou"];

  return [...str.toLowerCase()].filter((item) => vowels.includes(item)).length;
}
console.log(vowels("Aeio23"));

module.exports = vowels;

// const loweredStr = str.toLowerCase();
// let count = 0;
// for (const char of loweredStr) {
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//   )
//     count++;
// }

// return count;
