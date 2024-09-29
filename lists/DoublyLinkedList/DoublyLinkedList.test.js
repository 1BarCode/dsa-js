import DoublyLinkedList from ".";

describe("DoublyLinkedList", () => {
	let list;
	beforeEach(() => {
		list = new DoublyLinkedList();
		for (let i = 1; i <= 4; i++) {
			list.addLast(i);
		}
	});

	it("should set up correctly", () => {
		expect(list.toArray()).toEqual([1, 2, 3, 4]);
		expect(list.length()).toBe(4);
	});

	it("should removeFirst", () => {
		const removed = list.removeFirst();

		expect(removed).toBe(1);
		expect(list.toArray()).toEqual([2, 3, 4]);
		expect(list.length()).toBe(3);
	});

	it("should removeLast", () => {
		const removed = list.removeLast();

		expect(removed).toBe(4);
		expect(list.toArray()).toEqual([1, 2, 3]);
		expect(list.length()).toBe(3);
	});

	it("should addFirst", () => {
		for (let i = 1; i <= 4; i++) {
			list.addFirst(i);
		}

		expect(list.toArray()).toEqual([4, 3, 2, 1, 1, 2, 3, 4]);
		expect(list.length()).toBe(8);
	});

	it("should getFirst", () => {
		expect(list.getFirst()).toBe(1);
		expect(list.length()).toBe(4);
	});

	it("should getLast", () => {
		expect(list.getLast()).toBe(4);
		expect(list.length()).toBe(4);
	});

	it("should contains", () => {
		expect(list.contains(1)).toBe(true);
		expect(list.contains(2)).toBe(true);
		expect(list.contains(3)).toBe(true);
		expect(list.contains(4)).toBe(true);
		expect(list.contains(5)).toBe(false);
		expect(list.contains(6)).toBe(false);
		expect(list.length()).toBe(4);
	});

	it("should get index of", () => {
		expect(list.indexOf(1)).toBe(0);
		expect(list.indexOf(2)).toBe(1);
		expect(list.indexOf(3)).toBe(2);
		expect(list.indexOf(4)).toBe(3);
		expect(list.indexOf(5)).toBe(-1);
		expect(list.indexOf(6)).toBe(-1);
		expect(list.length()).toBe(4);
	});

	it("should get element at index", () => {
		expect(list.get(0)).toBe(1);
		expect(list.get(1)).toBe(2);
		expect(list.get(2)).toBe(3);
		expect(list.get(3)).toBe(4);
		expect(list.get(4)).toBe(null);
		expect(list.get(-1)).toBe(null);
		expect(list.length()).toBe(4);
	});

	it("should replace element at index", () => {
		const oldData = [];
		for (let i = 0; i < 4; i++) {
			oldData.push(list.set(i, 10 * (i + 1)));
		}

		expect(list.toArray()).toEqual([10, 20, 30, 40]);
		expect(oldData).toEqual([1, 2, 3, 4]);
		expect(list.length()).toBe(4);
	});
});
