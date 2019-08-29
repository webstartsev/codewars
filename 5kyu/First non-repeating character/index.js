// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  if (!s.length) {
    return '';
  }
  if (s.length === 1) {
    return s;
  }

  let word = '';
  for (let i = 0; i < s.length; i++) {
    word = s[i];

    for (let j = 0; j < s.length; j++) {
      if (i === j) {
        continue;
      }
      if (s[j].toLowerCase() === word.toLowerCase()) {
        word = '';
        break;
      }
      if (j === s.length - 1) {
        return word;
      }
    }
  }

  return word;
}
