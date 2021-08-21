const array = [2, 4, 6, 8];

const checkIfIsFavorite = (input) => {
  array.forEach((item) => {
    if (item === input) {
      return true;
    }
    return false;
  });
};

console.log(checkIfIsFavorite(4));
