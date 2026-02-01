const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    const pivotIndex = partition(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};

const partition = (array, left, right) => {
  const mid = Math.floor((left + right) / 2);
  [array[mid], array[right]] = [array[right], array[mid]];

  const pivot = array[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  return i + 1;
};
