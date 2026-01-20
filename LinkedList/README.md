# Linked List

A singly linked list implementation in JavaScript.

## Operations

| Method | Time Complexity | Description |
|--------|-----------------|-------------|
| `append(value)` | O(n) | Add element to the end |
| `prepend(value)` | O(1) | Add element to the beginning |
| `search(predicate)` | O(n) | Find node matching predicate function |
| `insertAt(position, value)` | O(n) | Insert at specific position |
| `removeFirst()` | O(1) | Remove first element |
| `removeAt(position)` | O(n) | Remove element at position |
| `removeBy(predicate)` | O(n) | Remove first node matching predicate |
| `printList()` | O(n) | Print all elements |
| `isEmpty()` | O(1) | Check if list is empty |

## Usage

```javascript
import List from "./linkedList.js";

const list = new List();

// Add elements
list.append(10);
list.append(20);
list.prepend(5);

// Search with predicate
const node = list.search((data) => data === 20);

// Remove elements
list.removeFirst();
list.removeAt(1);
list.removeBy((data) => data === 10);

// Print
list.printList();
```

## Structure

```
Node {
  data: any
  next: Node | null
}

List {
  head: Node | null
}
```