# Queue

A queue implementation in JavaScript.

## Operations

| Method | Time Complexity | Description |
|--------|-----------------|-------------|
| `enqueue(value)` | O(1) | Add element to the back |
| `dequeue()` | O(1) or O(n)* | Remove and return front element |
| `front()` / `peek()` | O(1) | Return front element without removing |
| `isEmpty()` | O(1) | Check if queue is empty |
| `size()` | O(1) | Return number of elements |

*O(n) if using array with `shift()`, O(1) if using linked list or circular buffer

## Usage

```javascript
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.front();   // 10
queue.dequeue(); // 10
queue.size();    // 2
```

## Principle

**FIFO** - First In, First Out