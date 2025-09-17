/*
Write a function that accepts two arguments:

- A string of text.
- A number (n).
The function should return a new string where every 
nth character in the original string is capitalized.
*/

const str = 'the quick brown fox jumped over the lazy old dog';
const n = 2;
console.log(capitalize(str, 3));

function capitalize(str, n) {
  console.log(str);
  const chars = str.split('');
  count = 1;

  for (let i = 0; i < chars.length; i++)  {
    if (count === n && chars[i] !== ' ') {
      chars[i] = chars[i].toUpperCase(); 
      count = 1;
    }
    else if (chars[i] !== ' ') count++;
  }

  return (chars.join(''));
}
