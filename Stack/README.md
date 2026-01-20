# Stack

A stack implementation in JavaScript using an array.

## Operations

| Method | Time Complexity | Description |
|--------|-----------------|-------------|
| `push(value)` | O(1) | Add element to the top |
| `pop()` | O(1) | Remove and return top element |
| `peek()` | O(1) | Return top element without removing |
| `isEmpty()` | O(1) | Check if stack is empty |
| `size()` | O(1) | Return number of elements |
| `clear()` | O(1) | Remove all elements |

## Usage

```javascript
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.peek();  // 30
stack.pop();   // 30
stack.size();  // 2
stack.isEmpty(); // false
stack.clear();
```

## Principle

**LIFO** - Last In, First Out

## Error Handling

- `pop()` throws `Error("Stack is empty")` when called on empty stack
- `peek()` throws `Error("Stack is empty")` when called on empty stack