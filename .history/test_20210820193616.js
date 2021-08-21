const array = [2, 4, 6, 8];

const checkIfIsFavorite = (input) => {
  array.forEach((item) => item === input);
  return false;
};

console.log(checkIfIsFavorite(6));
