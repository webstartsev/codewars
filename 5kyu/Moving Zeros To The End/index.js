// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

const moveZeros = function(arr) {
  const removeZero = arr.filter(item => item !== 0);

  for (let i = removeZero.length; i < arr.length; i++) {
    removeZero.push(0);
  }

  return removeZero;
};
