// https://www.codewars.com/kata/vasya-clerk/train/javascript

function tickets(peopleInLine) {
  console.log(peopleInLine);
  let tips = {};
  let kassa = 0;
  for (let i = 0; i < peopleInLine.length; i++) {
    console.log('-------------');
    console.log('kassa before', kassa);
    console.log('peopleInLine[i]', peopleInLine[i]);

    if (peopleInLine[i] === 25) {
      kassa += 25;
      if (tips[peopleInLine[i]]) {
        tips[peopleInLine[i]]++;
      } else {
        tips[peopleInLine[i]] = 1;
      }
      console.log('tips', tips);
      console.log('ADD', 25);
    } else if (peopleInLine[i] - 25 <= kassa) {
      kassa -= peopleInLine[i] - 25;

      if (tips[peopleInLine[i]]) {
        tips[peopleInLine[i]]++;
      } else if (!tips[peopleInLine[i]]) {
        tips[peopleInLine[i]] = 1;
      }
      console.log('tips', tips);
      console.log('DELETE', peopleInLine[i] - 25);
    } else {
      return 'NO';
    }
    console.log('kassa after', kassa);
  }
  return 'YES';
}
