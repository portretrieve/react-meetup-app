const array = [2, 4, 6, 8];

const checkIfIsFavorite = (input) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === input) {
      return true;
    }
  }

  //   array.forEach((item) => {
  //     if (item === input) {
  //       return true;
  //     }
  //   });
  return false;
};

console.log(checkIfIsFavorite(5));
