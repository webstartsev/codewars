// https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript

function alphabetPosition(text) {
  const pattern = /^[a-z]+$/i;
  return text
    .split('')
    .reduce((acc, item) => {
      if (pattern.test(item)) {
        const pos = item.toLowerCase().charCodeAt(0) - 96;
        return `${acc} ${pos}`;
      }
      return acc;
    }, '')
    .trim();
}
