const arr = [2, 4, 6, 8];
const func = (input) => {
  const isPresent = arr.some((item) => item === input);
  return isPresent;
};

console.log(func(3));
