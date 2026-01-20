import List from "../LinkedList/linkedList.js";

class HashTable {
  array = [];
  constructor(size) {
    this.array = Array.from({ length: size }, () => new List());
  }

  hash = (key) => {
    let hashedIndex = 0;
    for (let i = 0; i < key.length; i++) {
      hashedIndex += key.charCodeAt(i) * (i + 1);
    }
    return hashedIndex % this.array.length;
  };

  insert = (key, value) => {
    const indexToPlace = this.hash(key);
    const element = this.array[indexToPlace].search((data) => data.key === key);
    if (element) {
      element.data = { key, value };
    } else {
      this.array[indexToPlace].append({ key, value });
    }
  };

  delete = (key) => {
    const indexToDelete = this.hash(key);
    const element = this.array[indexToDelete].removeBy(
      (data) => data.key === key,
    );
    return element;
  };

  find = (key) => {
    const hashedIndex = this.hash(key);
    return this.array[hashedIndex].search((data) => data.key === key)?.data;
  };

  print = () => {
    console.log(this.array);
  };
}
