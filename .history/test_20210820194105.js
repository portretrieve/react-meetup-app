const arr = [2, 4, 6, 8];
const newArr = [];
const func = (input) => {
  newArr = arr.forEach((item) => item === input);
  console.log(newArr);
};

func(6);
