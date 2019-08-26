// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
  if (str2.length > str1.length) {
    return false;
  }
  if (str1 === str2) {
    return true;
  }

  if (str1.length === str2.length && str1 !== str2) {
    return false;
  }
  //code me
  let arr1 = str1.split('').sort();
  let arr2 = str2.split('').sort();
  for (let i = 0; i < arr2.length; i++) {
    let pos = arr1.indexOf(arr2[i]);
    if (pos !== -1) {
      arr1.splice(pos, 1);
    } else {
      return false;
    }
  }
  return true;
}
