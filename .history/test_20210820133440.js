const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 22, 30, 45, 47, 48, 51, 80
];

const findNum = (array, num) => {
  if (num > array[array.length / 2]) {
    console.log(array.length / 2);
  }
};

console.log(findNum(array, 20));