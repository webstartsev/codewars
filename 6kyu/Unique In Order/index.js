// https://www.codewars.com/kata/unique-in-order/train/javascript

const uniqueInOrder = iterable => {
  let prev = '';
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === prev) {
      continue;
    } else {
      prev = iterable[i];
      result.push(iterable[i]);
    }
  }
  return result;
};
