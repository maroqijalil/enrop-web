const sort = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < (numbers.length - i - 1); j++) {
      if (numbers[j] > numbers[j+1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j+1] = temp;
      }
    }
  }

  return numbers;
};

const reverseSort = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < (numbers.length - i - 1); j++) {
      if (numbers[j] < numbers[j+1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j+1] = temp;
      }
    }
  }

  return numbers;
};

console.log(sort([5, 6, 2, 6, 1, 3, 6]));
console.log(reverseSort([5, 6, 2, 6, 1, 3, 6]));
console.log(sort([5, 64, 26, 6, 17, 3, 6]));
console.log(reverseSort([5, 64, 26, 6, 17, 3, 6]));
console.log(sort([5, 6, 22, 63, 13, 3, 6]));
console.log(reverseSort([5, 6, 22, 63, 13, 3, 6]));
