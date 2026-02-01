const BubbleSort = (inputArray) => {
  if (!Array.isArray(inputArray)) return [];
  let arr = [...inputArray]
  let swapped;
  for (let i = 0; i < arr.length - 1; ++i) {
    swapped = false;
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
};
