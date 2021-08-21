const array = [2, 4, 6, 8];

const checkIfIsFavorite = (input) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === input) {
      return true;
    }
    return false;
  }

  //   array.forEach((item) => {
  //     if (item === input) {
  //       return true;
  //     }
  //   });
};

console.log(checkIfIsFavorite(4));
