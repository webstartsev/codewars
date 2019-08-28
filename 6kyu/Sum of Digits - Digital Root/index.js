// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript

function digital_root(n) {
  let arrNum = n.toString().split('');

  while (arrNum.length > 1) {
    let sum = arrNum.reduce((acc, item) => (acc += parseInt(item)), 0);
    arrNum = sum.toString().split('');
  }

  return parseInt(arrNum);
}
