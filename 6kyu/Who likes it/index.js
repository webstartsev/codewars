// https://www.codewars.com/kata/who-likes-it/train/javascript

function likes(names) {
  const count = names.lenght;

  if (!count) {
    return 'no one likes this';
  } else if (count === 1) {
    return `${names[0]} likes this`;
  } else if (count === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (count === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (count >= 4) {
    let countPeople = count - 2;
    return `${names[0]}, ${names[1]} and ${countPeople} others like this`;
  }
}
