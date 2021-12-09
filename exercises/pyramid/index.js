// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let hash = "|";
    let space = " ";
    console.log(
      space.repeat(n - i - 1) + hash.repeat(2 * i + 1) + space.repeat(n - i - 1)
    );
  }
}
pyramid(10);
module.exports = pyramid;
