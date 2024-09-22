import BinarySearchTree from "./trees/bst/BinarySearchTree.js";

const bst = new BinarySearchTree();
// insert data randomly from 0 to 100
for (let i = 0; i < 10; i++) {
	bst.insert(Math.floor(Math.random() * 100));
}

bst.inOrder((root) => console.log(root.data));
console.log(bst.getHeight());
