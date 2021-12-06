// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const reversedStr = [];

  str.split("").forEach((element) => reversedStr.unshift(element));

  return reversedStr.join("");
}

module.exports = reverse;

// Solution 1
// function reverse(str) {
//     return str.split("").reverse().join("");
//   }
