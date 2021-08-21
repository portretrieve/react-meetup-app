const array = [2, 4, 5, 6];
const isEven = (num) => {
  array.some((item) => item === num);
};

console.log(isEven(4));
