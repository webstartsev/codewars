// https://www.codewars.com/kata/persistent-bugger/train/javascript

function persistence(num) {
  let arrNum = num.toString().split('');
  let result = false;
  let count = 0;

  while (!result) {
    if (arrNum.length === 1) {
      result = true;
      break;
    }

    let sum = arrNum.reduce((acc, item) => {
      return (acc *= parseInt(item));
    }, 1);

    arrNum = sum.toString().split('');
    count++;
  }

  return count;
}
