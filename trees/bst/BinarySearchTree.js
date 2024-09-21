class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

export default class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	search(value) {
		let curr = this.root;
		while (curr !== null) {
			if (curr.data === value) return curr; // found
			if (value < curr.data) curr = curr.left; // check left node for smaller values
			else curr = curr.right; // check right node for bigger values
		}
		return null;
	}

	searchRecurHelper(root, value) {
		if (root === null) return root; // base case, exit condition
		if (root.data === value) return root; // found
		if (value < root.data) return this.searchRecurHelper(root.left, data); // continue search left
		return this.searchRecurHelper(root.right, data); // continue search right
	}

	searchRecur(value) {
		return this.searchRecurHelper(this.root, value);
	}

	// time: at best O(logN), at worst O(N) (for unbalanced, all straight)
	insert(data) {
		if (this.root === null) {
			// no root, make new node root & end
			this.root = new Node(data);
			return;
		}
		// search for the right position to insert data
		let curr = this.root;
		while (curr !== null) {
			if (data < curr.data) {
				// look left
				if (curr.left === null) {
					// no smaller number on left to check, insert
					curr.left = new Node(data);
					return;
				} else {
					// continue to check left of current node
					curr = curr.left;
				}
			} else {
				// if data >= current, check right child
				if (curr.right === null) {
					// no bigger number on right to check, insert
					curr.right = new Node(data);
					return;
				} else {
					// continue to check right of current node
					curr = curr.right;
				}
			}
		}
	}

	insertRecursiveHelper(root, data) {
		if (root === null) {
			return new Node(data);
		}

		if (data < root.data) {
			root.left = this.insertRecursiveHelper(root.left, data);
			return root;
		}

		root.right = this.insertRecursiveHelper(root.right, data);
		return root;
	}

	insertRecursive(data) {
		this.insertRecursiveHelper(this.root, data);
	}
}

// insert(data) {
//     const newNode = new Node(data);
//     if (this.root === null) {
//         this.root = newNode;
//     } else {
//         this.insertNode(this.root, newNode);
//     }
// }

// insertNode(node, newNode) {
//     if (newNode.data < node.data) {
//         if (node.left === null) {
//             node.left = newNode;
//         } else {
//             this.insertNode(node.left, newNode);
//         }
//     } else {
//         if (node.right === null) {
//             node.right = newNode;
//         } else {
//             this.insertNode(node.right, newNode);
//         }
//     }
// }

// remove(data) {
//     this.root = this.removeNode(this.root, data);
// }

// removeNode(node, key) {
//     if (node === null) {
//         return null;
//     } else if (key < node.data) {
//         node.left = this.removeNode(node.left, key);
//         return node;
//     } else if (key > node.data) {
//         node.right = this.removeNode(node.right, key);
//         return node;
//     } else {
//         if (node.left === null && node.right === null) {
//             node = null;
//             return node;
//         }
//         if (node.left === null) {
//             node = node.right;
//             return node;
//         } else if (node.right === null) {
//             node = node.left;
//             return node;
//         }
//         const aux = this.findMinNode(node.right);
//         node.data = aux.data;
//         node.right = this.removeNode(node.right, aux.data);
//         return node;
//     }
// }

// findMinNode(node) {
//     if (node.left === null) {
//         return node;
//     } else {
//         return this.findMinNode(node.left);
//     }
// }

// getRootNode() {
//     return this.root;
// }

// search(node, data) {
//     if (node === null) {
//         return null;
//     } else if (data < node.data) {
//         return this.search(node.left, data);
//     } else if (data > node.data) {
//         return this.search(node.right, data);
//     } else {
//         return node;
//     }
// }

// inOrder(node, callback) {
//     if (node !== null) {
//         this.inOrder(node.left, callback);
//         callback(node.data);
//     }
//     this.inOrder(node.right, callback);
// }
