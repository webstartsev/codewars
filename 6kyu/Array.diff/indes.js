// https://www.codewars.com/kata/array-dot-diff/train/javascript

function array_diff(a, b) {
  if (a.length === 0) {
    return [];
  }
  if (a.length >= b.length) {
    return a.filter(item => !b.includes(item));
  } else {
    return b.filter(item => !a.includes(item));
  }
}
