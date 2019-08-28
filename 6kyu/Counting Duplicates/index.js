// https://www.codewars.com/kata/counting-duplicates/train/javascript

function duplicateCount(text) {
  let obj = {};

  text.split('').forEach(item => {
    let label = item.toLowerCase();
    !obj[label] ? (obj[label] = 1) : obj[label]++;
  });

  let count = 0;
  for (let item in obj) {
    if (obj[item] > 1) {
      count++;
    }
  }

  return count;
}
