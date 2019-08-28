// https://www.codewars.com/kata/dubstep/train/javascript

function songDecoder(song) {
  return song
    .replace(/WUB/gi, ' ')
    .replace(/\s{2,}/gi, ' ')
    .trim();
}
