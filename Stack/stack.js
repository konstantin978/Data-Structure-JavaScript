class Stack {
  array = [];
  constructor(arr) {
    this.array = arr || [];
  }

  push = (value) => {
    this.array.push(value);
  };

  pop = () => {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this.array.pop();
  };

  peek = () => {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this.array[this.array.length - 1];
  };

  isEmpty = () => {
    return this.array.length === 0;
  };

  size = () => {
    return this.array.length;
  };

  clear = () => {
    this.array = [];
  }
}
