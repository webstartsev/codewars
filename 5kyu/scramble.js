// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
  let arr1 = str1.split('').sort();
  let arr2 = str2.split('').sort();
  
  let x = 0;
  
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] === arr2[x]){
      x++;
    }
  }
  
  return x === arr2.length;
}
