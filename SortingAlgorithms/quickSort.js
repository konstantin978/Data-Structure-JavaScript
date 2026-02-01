const QuickSort = (inputArray) => {
  if (!Array.isArray(inputArray)) return [];
  const arr = [...inputArray];

  const partition = (low, high) => {
    const pivotEl = arr[low];
    let i = low;
    let j = high;
    do {
      do {
        ++i;
      } while (arr[i] < pivotEl);
      do {
        --j;
      } while (arr[j] > pivotEl);

      if (j > i) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    } while (i < j);

    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
  };

  const sort = (low, high) => {
    if (low < high) {
      const j = partition(low, high);
      sort(low, j);
      sort(j + 1, high);
    }
  };

  sort(0, arr.length - 1);
  return arr;
};
