// https://www.codewars.com/kata/create-phone-number/train/javascript

function createPhoneNumber(numbers) {
  return numbers.reduce((mask, item, index) => {
    if (index === 0) {
      mask += '(';
    } else if (index === 3) {
      mask += ') ';
    } else if (index === 6) {
      mask += '-';
    }
    return mask + item;
  }, '');
}
