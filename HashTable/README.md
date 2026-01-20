# Hash Table (Chaining)

A hash table implementation using separate chaining for collision resolution.

## Operations

| Method | Average Time | Worst Time | Description |
|--------|--------------|------------|-------------|
| `insert(key, value)` | O(1) | O(n) | Insert or update key-value pair |
| `find(key)` | O(1) | O(n) | Get value by key (returns `undefined` if not found) |
| `delete(key)` | O(1) | O(n) | Remove key-value pair |
| `print()` | O(n) | O(n) | Print internal structure |

## Usage

```javascript
import HashTable from "./hashTableChaining.js";

const map = new HashTable(10);

// Insert
map.insert("name", "John");
map.insert("age", 25);

// Update (same key)
map.insert("name", "Jane");

// Find
const name = map.find("name"); // "Jane"
const missing = map.find("foo"); // undefined

// Delete
map.delete("age");
```

## How It Works

### Hash Function
Position-weighted sum of character codes:
```
hash("abc") = (a*1 + b*2 + c*3) % tableSize
```
This ensures anagrams like "abc" and "cba" hash to different buckets.

### Collision Resolution
Uses **separate chaining** with linked lists. When multiple keys hash to the same index, they're stored in a linked list at that bucket.

```
Bucket 0: -> {key: "foo", value: 1} -> {key: "bar", value: 2}
Bucket 1: -> {key: "baz", value: 3}
Bucket 2: (empty)
```

## Structure

```
HashTable {
  array: List[]  // Array of linked lists
}
```
