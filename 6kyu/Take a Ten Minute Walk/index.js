// https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let obj = {};

  walk.forEach(item => (!obj[item] ? (obj[item] = 1) : obj[item]++));

  if (obj['n'] !== obj['s'] || obj['w'] !== obj['e']) {
    return false;
  } else {
    return true;
  }
}
