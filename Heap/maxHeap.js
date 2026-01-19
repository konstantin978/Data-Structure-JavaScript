// Time Complexity:
// constructor(arr) - O(n log n) - calls insert n times, each insert is O(log n)
// heapify(arr) - O(n log n) - same as constructor
// insert(el) - O(log n) - bubble up at most log n levels
// deleteRoot() - O(log n) - bubble down at most log n levels
// peekRoot() - O(1) - just return first element
// print() - O(n) - print all n elements

class MaxHeap {
  array = [];
  constructor(arr) {
    this.heapify(arr);
  }

  heapify = (arr) => {
    arr.forEach((el) => this.insert(el));
    return this.array;
  };

  insert = (el) => {
    this.array.push(el);
    let index = this.array.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.array[index] > this.array[parentIndex]) {
      [this.array[index], this.array[parentIndex]] = [
        this.array[parentIndex],
        this.array[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return el;
  };

  deleteRoot = () => {
    if (this.array.length === 0) return null;
    if (this.array.length === 1) return this.array.pop();

    const root = this.array[0];
    this.array[0] = this.array.pop();

    let index = 0;

    while (true) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let largest = index;

      if (
        leftChild < this.array.length &&
        this.array[leftChild] > this.array[largest]
      ) {
        largest = leftChild;
      }

      if (
        rightChild < this.array.length &&
        this.array[rightChild] > this.array[largest]
      ) {
        largest = rightChild;
      }

      if (largest === index) break;

      [this.array[index], this.array[largest]] = [
        this.array[largest],
        this.array[index],
      ];
      index = largest;
    }
    return root;
  };

  peekRoot = () => {
    return this.array[0];
  };

  print = () => {
    console.log(this.array);
  };
}

const heap = new MaxHeap([64, 34, 25, 12, 22, 11, 90, 5, 18, 45]);

heap.insert(150);
heap.print();

heap.deleteRoot();
heap.print();

heap.deleteRoot();
heap.print();

heap.deleteRoot();
heap.print();
