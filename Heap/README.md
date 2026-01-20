# Heap Data Structure

This folder contains JavaScript implementations of heap data structures, including both **Max Heap** and **Min Heap**.

## What is a Heap?

A heap is a specialized tree-based data structure that satisfies the heap property:
- **Max Heap**: Parent nodes are always greater than or equal to their children (largest element at root)
- **Min Heap**: Parent nodes are always less than or equal to their children (smallest element at root)

Heaps are commonly used to implement priority queues and in algorithms like heap sort.

## Implementations

### 1. Max Heap (`maxHeap.js`)
A max heap where the maximum element is always at the root.

### 2. Min Heap (`minHeap.js`)
A min heap where the minimum element is always at the root.

## API Reference

Both heap implementations provide the following methods:

### Constructor
```javascript
const heap = new MaxHeap([64, 34, 25, 12, 22, 11, 90]);
// or
const heap = new MinHeap([64, 34, 25, 12, 22, 11, 90]);
```
Creates a new heap and initializes it with the provided array.

### Methods

| Method | Description | Time Complexity |
|--------|-------------|-----------------|
| `insert(element)` | Adds a new element to the heap | O(log n) |
| `deleteRoot()` | Removes and returns the root element (max/min) | O(log n) |
| `peekRoot()` | Returns the root element without removing it | O(1) |
| `heapify(array)` | Builds a heap from an array | O(n log n) |
| `print()` | Prints the heap array to console | O(n) |

## Usage Examples

### Max Heap Example

```javascript
const heap = new MaxHeap([64, 34, 25, 12, 22, 11, 90, 5, 18, 45]);

// Insert a new element
heap.insert(150);
heap.print(); // [150, 90, 64, 45, 34, 25, 22, 5, 18, 12, 11]

// Get the maximum element (without removing)
console.log(heap.peekRoot()); // 150

// Remove and return the maximum element
const max = heap.deleteRoot();
console.log(max); // 150
heap.print(); // [90, 45, 64, 18, 34, 25, 22, 5, 11, 12]
```

### Min Heap Example

```javascript
const heap = new MinHeap([64, 34, 25, 12, 22, 11, 90, 5, 18, 45]);

// Insert a new element
heap.insert(3);
heap.print(); // [3, 5, 11, 12, 22, 25, 90, 64, 18, 45, 34]

// Get the minimum element (without removing)
console.log(heap.peekRoot()); // 3

// Remove and return the minimum element
const min = heap.deleteRoot();
console.log(min); // 3
heap.print(); // [5, 12, 11, 18, 22, 25, 90, 64, 34, 45]
```

## How It Works

### Heap Structure
Heaps are typically represented as arrays where for any element at index `i`:
- Left child is at index `2*i + 1`
- Right child is at index `2*i + 2`
- Parent is at index `Math.floor((i - 1) / 2)`

### Insert Operation
1. Add the new element at the end of the array
2. "Bubble up" the element by comparing with its parent
3. Swap if it violates the heap property
4. Repeat until heap property is satisfied

### Delete Root Operation
1. Replace the root with the last element
2. Remove the last element
3. "Bubble down" from the root by comparing with children
4. Swap with the largest child (max heap) or smallest child (min heap)
5. Repeat until heap property is satisfied

## Time Complexities

| Operation | Time Complexity | Description |
|-----------|-----------------|-------------|
| Constructor | O(n log n) | Inserts n elements, each taking O(log n) |
| Insert | O(log n) | Bubble up at most log n levels |
| Delete Root | O(log n) | Bubble down at most log n levels |
| Peek Root | O(1) | Direct array access |
| Heapify | O(n log n) | Builds heap from array |

## Use Cases

- **Priority Queues**: Efficiently get the highest/lowest priority element
- **Heap Sort**: Sorting algorithm with O(n log n) time complexity
- **Finding K largest/smallest elements**: Efficiently find top K elements
- **Median Maintenance**: Using both min and max heaps to track running median
- **Dijkstra's Algorithm**: Finding shortest paths in graphs
- **Task Scheduling**: Managing tasks based on priority

## Running the Examples

To run the example code included in the files:

```bash
node maxHeap.js
# or
node minHeap.js
```

## Notes

- Both implementations use class syntax and arrow functions (ES6+)
- The heap property is maintained after every insert and delete operation
- The implementations use array swapping for element exchanges
