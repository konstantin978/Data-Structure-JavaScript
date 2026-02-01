const QuickSort = (inputArray) => {
  if (!Array.isArray(inputArray)) return [];
  const arr = [...inputArray];

  const partition = (left, right) => {
    const mid = Math.floor((left + right) / 2);
    [arr[mid], arr[right]] = [arr[right], arr[mid]];

    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
  };

  const sort = (left, right) => {
    if (left < right) {
      const pivotIndex = partition(left, right);
      sort(left, pivotIndex - 1);
      sort(pivotIndex + 1, right);
    }
  };

  sort(0, arr.length - 1);
  return arr;
};
