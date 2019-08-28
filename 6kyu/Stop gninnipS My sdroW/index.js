// https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript

function spinWords(str) {
  return str
    .split(' ')
    .map(text =>
      text.length >= 5
        ? text
            .split('')
            .reverse()
            .join('')
        : text
    )
    .join(' ');
}
