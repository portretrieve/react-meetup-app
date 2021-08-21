const array = [2, 4, 5, 6];
const isInArray = (num) => {
  return array.some((item) => item === num);
};

console.log(isInArray(7));
