// https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript

function findEvenIndex(arr) {
  let sumLeft = 0;
  let sumRight = 0;
  if (arr.length === 1) {
    return 0;
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    sumRight = 0;
    for (let j = arr.length - 1; j > i; j--) {
      sumRight += arr[j];
    }
    if (sumLeft === sumRight) {
      return i;
    } else {
      sumLeft += arr[i];
    }
  }
  return -1;
}
