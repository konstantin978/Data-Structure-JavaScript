// append(value) - O(n) - traverses the list to find the last node
// prepend(value) - O(1) - inserts at the head without traversal
// search(value) - O(n) - scans the list until value is found or list ends
// insertAt(position, value) - O(n) - traverses to (position - 1) before inserting
// removeFirst() - O(1) - updates head pointer only
// removeAt(position) - O(n) - traverses to (position - 1) before removing
// printList() - O(n) - visits and prints all nodes
// isEmpty() - O(1) - checks if head is null

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  append = (value) => {
    if (this.isEmpty()) {
      this.head = new Node(value);
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
  };

  prepend = (value) => {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  };

  search = (predicate) => {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (predicate(currentNode.data)) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  };

  insertAt = (position, value) => {
    if (position < 0) return false;
    if (this.isEmpty() && position > 0) return false;
    if (position === 0) {
      this.prepend(value);
      return;
    }
    let currentNode = this.head;
    let i = 0;
    while (i !== position - 1 && currentNode.next !== null) {
      currentNode = currentNode.next;
      ++i;
    }
    if (i !== position - 1) return false;
    const nextNode = currentNode.next;
    const newNode = new Node(value);
    currentNode.next = newNode;
    newNode.next = nextNode;
    return true;
  };

  removeFirst = () => {
    if (this.head !== null) {
      this.head = this.head.next;
    }
  };

  removeAt = (position) => {
    if (position < 0) return false;
    if (this.isEmpty()) return false;
    if (position === 0) {
      this.removeFirst();
      return;
    }
    let currentNode = this.head;
    let i = 0;
    while (i !== position - 1 && currentNode.next !== null) {
      currentNode = currentNode.next;
      ++i;
    }
    if (currentNode.next === null) return false;
    currentNode.next = currentNode.next.next;
    return true;
  };

  removeBy = (predicate) => {
    if (this.isEmpty()) return false;
    if (predicate(this.head.data)) {
      this.removeFirst();
      return true;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (predicate(currentNode.next.data)) {
        currentNode.next = currentNode.next.next;
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  printList = () => {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  };

  isEmpty = () => {
    return this.head === null;
  };
}

const list = new List();
list.append(15);
list.append(17);
list.append(25);
// list.printList();
list.prepend(7);
list.append(585);
list.append(294);
// list.printList();

// list.printList();
list.removeAt(2);
list.removeFirst();
// list.printList();
// console.log(list.search(17));
list.insertAt(2, 1234);
// list.printList();

export default List;