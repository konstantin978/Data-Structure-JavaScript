class TreeNode {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(t) {
    if (t > 2 || t < 0) {
      throw new Error("Wrong Degree Value");
    }
    this.root = null;
    this.minDegree = t;
  }

  createNode = (value) => {
    this.root = this._insert(this.root, value);
  };

  _insert = (node, value) => {
    if (!node) {
      return new TreeNode(value);
    }

    if (value < node.data) {
      node.left = this._insert(node.left, value);
    } else if (value > node.data) {
      node.right = this._insert(node.right, value);
    }

    // duplicates are ignored
    return node;
  };

  search = (value) => {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.data === value) {
        return currentNode;
      } else if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  };

  inOrderTraversal = (node) => {
    if (node === null) return;
    this.inOrderTraversal(node.left);
    console.log(node.data);
    this.inOrderTraversal(node.right);
  };

  preOrderTraversal = (node) => {
    if (node === null) return;
    console.log(node.data);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  };

  postOrderTraversal = (node) => {
    if (node === null) return;
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.data);
  };

  delete = (value) => {
    this.root = this._deleteNode(this.root, value);
  };

  _deleteNode = (node, value) => {
    if (node === null) return null;

    if (value < node.data) {
      node.left = this._deleteNode(node.left, value);
      return node;
    }

    if (value > node.data) {
      node.right = this._deleteNode(node.right, value);
      return node;
    }

    if (node.left === null && node.right === null) {
      return null;
    }

    if (node.left === null) return node.right;
    if (node.right === null) return node.left;

    const successor = this._findMin(node.right);
    node.data = successor.data;
    node.right = this._deleteNode(node.right, successor.data);

    return node;
  };

  _findMin = (node) => {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  };
}
