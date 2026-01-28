class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty = () => this.head === null;

  append = (value) => {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  };

  prepend = (value) => {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  };

  search = (predicate) => {
    let current = this.head;
    while (current) {
      if (predicate(current.data)) return current;
      current = current.next;
    }
    return null;
  };

  insertAt = (position, value) => {
    if (position < 0) return false;
    if (position === 0) {
      this.prepend(value);
      return true;
    }

    let current = this.head;
    let i = 0;

    while (current && i < position) {
      current = current.next;
      i++;
    }

    if (!current) {
      if (i === position) {
        this.append(value);
        return true;
      }
      return false;
    }

    const newNode = new Node(value);
    newNode.previous = current.previous;
    newNode.next = current;

    current.previous.next = newNode;
    current.previous = newNode;

    return true;
  };

  removeFirst = () => {
    if (this.isEmpty()) return;

    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }

    this.head = this.head.next;
    this.head.previous = null;
  };

  removeAt = (position) => {
    if (position < 0 || this.isEmpty()) return false;
    if (position === 0) {
      this.removeFirst();
      return true;
    }

    let current = this.head;
    let i = 0;

    while (current && i < position) {
      current = current.next;
      i++;
    }

    if (!current) return false;

    if (current === this.tail) {
      this.tail = current.previous;
      this.tail.next = null;
      return true;
    }

    current.previous.next = current.next;
    current.next.previous = current.previous;

    return true;
  };

  removeBy = (predicate) => {
    if (this.isEmpty()) return false;

    let current = this.head;

    while (current) {
      if (predicate(current.data)) {
        if (current === this.head) {
          this.removeFirst();
        } else if (current === this.tail) {
          this.tail = current.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        return true;
      }
      current = current.next;
    }
    return false;
  };

  printList = () => {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  };

  printReverse = () => {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.previous;
    }
  };
}

export default DoubleLinkedList;
