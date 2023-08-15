export function getRandomIntsArray({ length, min, max }) {
  let arr = [];
  for (let i = 0; i <= length; i++) {
    arr[i] = getRandomIntInclusive(min, max);
  }
  return arr;
}

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
