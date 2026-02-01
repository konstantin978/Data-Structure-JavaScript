const InsertionSort = (inputArray) => {
  if (!Array.isArray(inputArray)) return [];
  const arr = [...inputArray];
  for (let i = 1; i < arr.length; ++i) {
    let j = i - 1;
    let currentEl = arr[i];
    while (j >= 0 && arr[j] > currentEl) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = currentEl;
  }
  return arr;
};