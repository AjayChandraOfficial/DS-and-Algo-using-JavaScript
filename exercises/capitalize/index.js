// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str
    .split(" ")
    .map((item) => [item[0].toUpperCase(), item.slice(1, item.length)].join(""))
    .join(" ");
}
// console.log(capitalize("Hi there how are you?"));
module.exports = capitalize;

// function capitalize(str) {
//     //   const strArr = str.split("");
//     //   return strArr.map((item) => item[0].toUpperCase());
//     const strArr = str.split(" ");
//     const convertedArr = [];
//     for (const item of strArr) {
//       convertedArr.push(
//         [item[0].toUpperCase(), item.slice(1, item.length)].join("")
//       );
//     }
//     return convertedArr.join(" ");

//     //   .map((item, i) => item[0].toUpperCase());
//   }
