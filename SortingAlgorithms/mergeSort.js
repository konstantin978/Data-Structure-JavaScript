const merge = (arr, left, mid, right) => {
  let i = left;
  let k = left;
  let j = mid + 1;
  let tempArr = [];

  while (i <= mid && j <= right) {
    if (arr[i] < arr[j]) {
      tempArr[k++] = arr[i++];
    } else {
      tempArr[k++] = arr[j++];
    }
  }
  for (; i <= mid; ++i) {
    tempArr[k++] = arr[i];
  }
  for (; j <= right; ++j) {
    tempArr[k++] = arr[j];
  }

  for (let x = left; x <= right; x++) {
    arr[x] = tempArr[x];
  }
};

const MergeSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right) {
        let mid = Math.floor((left + right) / 2);
        MergeSort(arr, left, mid);
        MergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
    return arr;
};
