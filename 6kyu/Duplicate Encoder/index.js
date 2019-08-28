// https://www.codewars.com/kata/duplicate-encoder/train/javascript

function duplicateEncode(word) {
  let obj = {};
  word.split('').forEach(item => {
    if (!item.match(/[A-Z]/)) {
      !obj[item] ? (obj[item] = 1) : obj[item]++;
    }
  });

  console.log(word);
  console.log(obj);
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
