// https://www.codewars.com/kata/strip-comments/train/javascript

function solution(input, markers) {
  let arrInput = input.split('\n');
  let result = [];
  let findComment = false;

  for (let i = 0; i < arrInput.length; i++) {
    findComment = false;
    for (let j = 0; j < markers.length; j++) {
      if (arrInput[i].includes(markers[j])) {
        findComment = true;
        let beforeComment = arrInput[i].split(markers[j])[0];
        result.push(beforeComment.trim());
      }
    }
    if (!findComment) {
      result.push(arrInput[i]);
    }
  }

  return result.join('\n');
}
