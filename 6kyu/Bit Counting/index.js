// https://www.codewars.com/kata/bit-counting/train/javascript

var countBits = function(n) {
  return n
    .toString(2)
    .split('')
    .reduce((acc, item) => {
      if (parseInt(item) === 1) {
        return ++acc;
      }
      return acc;
    }, 0);
};
