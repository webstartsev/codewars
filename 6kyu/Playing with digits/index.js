// https://www.codewars.com/kata/playing-with-digits/train/javascript

function digPow(n, p) {
  const sum = n
    .toString()
    .split('')
    .reduce((acc, item, index) => {
      return (acc += Math.pow(parseInt(item), p + index));
    }, 0);

  const k = sum / n;

  return (k ^ 0) === k ? k : -1;
}
