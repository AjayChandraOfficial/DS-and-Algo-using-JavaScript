// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
const anagrams = (stringA, stringB) =>
  refineString(stringA) === refineString(stringB);
const refineString = (str) =>
  str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
module.exports = anagrams;

// Slution1;
// function anagrams(stringA, stringB) {
//     const stringA_shrinked = stringA
//       .replace(/[^\w]/g, "")
//       .toLowerCase()
//       .split("");
//     const stringB_shrinked = stringB
//       .replace(/[^\w]/g, "")
//       .toLowerCase()
//       .split("");

//     if (stringA_shrinked.length !== stringB_shrinked.length) return false;

//     const makeCharacterMap = (arr) => {
//       const strChars = {};
//       for (const char of arr) {
//         if (strChars[char]) {
//           strChars[char]++;
//         } else {
//           strChars[char] = 1;
//         }
//       }
//       return strChars;
//     };

//     const strA_Map = makeCharacterMap(stringA_shrinked);
//     const strB_Map = makeCharacterMap(stringB_shrinked);

//     let isEqual = true;
//     for (const char in strA_Map) {
//       if (strA_Map[char] !== strB_Map[char]) isEqual = false;
//     }
//     return isEqual;
//   }
