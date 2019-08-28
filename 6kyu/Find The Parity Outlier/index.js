// https://www.codewars.com/kata/find-the-parity-outlier/train/javascript

function findOutlier(integers) {
  let countEven = 0;
  let odd;
  let even;

  integers.forEach(item => {
    if (item % 2 === 0) {
      countEven++;
      even = item;
    } else {
      odd = item;
    }
  });

  return countEven > 1 ? odd : even;
}
