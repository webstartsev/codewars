// https://www.codewars.com/kata/snail/train/javascript

const snail = function(array) {
  let size = array.length;
  let allItems = size * size;
  let tern = ["t", "r", "b", "l"];
  let result = [];
  let line = 0;
  let count = 1;

  while(allItems >= 0){
    console.log("begin allItems", allItems);
    switch(tern[count % 4]){
      case "t":
//         line--;
        console.log(tern[count % 4]);
        console.log('line', line);
        console.log('from', array[array.length - 1 - line].length - line - 1);
        console.log('to', line);
        for(let i = array[array.length - 1 - line].length - line - 1; i <= line; i++){
            result.push(array[i][line]);
            allItems--;
        }
        count++;
        break;
      case "b":
        line++;
        console.log(tern[count % 4]);
        console.log('from', line);
        console.log('to', array[array.length - 1].length - line);
        for(let i = line; i <= array[array.length - 1].length - line; i++){
            result.push(array[i][array.length - 1]);
            allItems--;
        }
        count++;
        break;
      case "l":
        line++;
        console.log(tern[count % 4]);
        console.log('from', line - 1);
        console.log('to',  array.length - line - 1);
        console.log('line', line);
        for(let i = line - 1; i >= array.length - line - 1; i--){
          result.push(array[line][i]);
          allItems--;
        }
        count++;
        break;
      case "r":
      default:
        console.log(tern[count % 4]);
        console.log('from', line);
        console.log('to', array[line].length);
        for(let i = line; i < array[line].length; i++){
          result.push(array[line][i]);
          allItems--;
        }
        count++;
        break;
    }
    if(count === 5){
      line++;
      count = 1;
    }
    console.log("end allItems", allItems);
    console.log("result",result);
    console.log('------------');
    
    
  }
//   console.log(size);
  console.log(result);
}

[1,  2,   3,  4,  5, 6], 
[20, 21, 22, 23, 24, 7], 
[19, 32, 33, 34, 25, 8],
[18, 31, 36, 35, 26, 9], 
[17, 30, 29, 28, 27, 10], 
[16, 15, 14, 13, 12, 11]

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]




[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

[1, 2, 3, 6, 9, 8, 7, 4, 5]