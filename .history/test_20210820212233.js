const array = [2, 4, 5, 6];
const isInArray = (num) => {
  array.some((item) => item === num);
};

console.log(isInArray(4));
