class Queue {
    array = [];
    constructor(arr) {
        this.array = arr || [];
    }

    enqueue = (el) => {
        this.array.push(el);
        return true;
    }

    dequeue = () => {
        return this.array.shift();
    }

    peek = () => {
        return this.array[0];
    }

    isEmpty = () => {
        return this.array.length === 0;
    }

    size = () => {
        return this.array.length;
    }

    clear = () => {
        this.array = [];
        return true;
    }

    // utility functions

    toArray = () => {
        return [...this.array];
    }

    toString = () => {
        return String(this.array);
    }
}

export default Queue;