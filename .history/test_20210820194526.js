const arr = [2, 4, 6, 8];
const func = (input) => {
  return arr.some((item) => item === input);
};

console.log(func(8));
