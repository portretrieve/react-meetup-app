const arr = [2, 4, 6, 8];
const func = (input) => {
  const array = arr.map((item) => item === input);
  return array.includes(true) ? true : false;
};

func(6);
