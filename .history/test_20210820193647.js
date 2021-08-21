const arr = [2, 4, 6, 8];

const checkIfIsFavorite = (input) => {
  arr.forEach((item) => item === input);
};

console.log(checkIfIsFavorite(6));
