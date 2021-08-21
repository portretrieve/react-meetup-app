const array = [2, 4, 5, 6];
const isInArray = (num) => {
  return array.every((item) => item === num);
};

console.log(isInArray(4));
console.log(array.includes(4));
