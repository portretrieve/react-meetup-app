const array = [2, 4, 6, 8];

const checkIfIsFavorite = (meetUpId) => {
  array.forEach((item) => {
    if (item === meetUpId) {
      return true;
    }
    return false;
  });
};

console.log(checkIfIsFavorite(4));
