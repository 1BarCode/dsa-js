import BinarySearchTree from ".";

function randomAddN(bst, n, max) {
	for (let i = 0; i < n; i++) {
		bst.insert(Math.floor(Math.random() * max));
	}
}

describe("BinarySearchTree", () => {
	let bst;
	beforeEach(() => {
		bst = new BinarySearchTree();
	});

	it("should insert data", () => {
		const n = 5;
		randomAddN(bst, n, 100);

		expect(bst.root).not.toBeNull();
		const result = [];
		bst.inOrder((node) => result.push(node.data));
		expect(result.length).toBe(n);
	});

	it("should get height", () => {
		const n = 10;
		randomAddN(bst, n, 100);

		const height = bst.getHeight();
		expect(height).toBeGreaterThan(-1);
	});

	it("should convert to array", () => {
		const n = 10;
		randomAddN(bst, n, 100);

		const result = bst.toArray();
		expect(result.length).toBe(n);
	});

	it("should remove data", () => {
		const n = 10;
		randomAddN(bst, n, 100);

		const data = Math.floor(Math.random() * 100);
		bst.insert(data);
		expect(bst.search(data)).not.toBeNull();

		bst.remove(data);
		expect(bst.search(data)).toBeNull();
	});

	it("should search data", () => {
		const n = 10;
		randomAddN(bst, n, 100);

		const data = Math.floor(Math.random() * 100);
		bst.insert(data);
		expect(bst.search(data)).not.toBeNull();
	});
});
