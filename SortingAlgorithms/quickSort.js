
const partition = (arr, left, right) => {
  const pivot = arr[left];
  let i = left;
  let j = right;
  do {
    do {
      ++i;
    } while (arr[i] < pivot);
    do {
      --j;
    } while (arr[j] > pivot);
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  } while (i < j);

  [arr[left], arr[j]] = [arr[j], arr[left]];
  return j;
};

const QuickSort = (arr, left = 0, right = arr.length) => {
  let j;
  if(left < right) {
    j = partition(arr, left, right);
    QuickSort(arr, left, j);
    QuickSort(arr, j + 1, right);
  }
  return arr;
}
