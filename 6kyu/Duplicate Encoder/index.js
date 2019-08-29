// https://www.codewars.com/kata/duplicate-encoder/train/javascript

function duplicateEncode(word) {
  let obj = {};
  word.split('').forEach(item => {
    let label = item.toLowerCase();
    !obj[label] ? (obj[label] = 1) : obj[label]++;
  });
  return word
    .split('')
    .map(item => {
      if (obj[item.toLowerCase()] > 1) {
        return ')';
      } else {
        return '(';
      }
    })
    .join('');
}
