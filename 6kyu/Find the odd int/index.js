// https://www.codewars.com/kata/find-the-odd-int/train/javascript

function findOdd(A) {
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    obj[A[i]] === undefined ? (obj[A[i]] = 1) : obj[A[i]]++;
  }

  for (let item in obj) {
    if (obj[item] % 2 !== 0) {
      return parseInt(item);
    }
  }

  return 0;
}
