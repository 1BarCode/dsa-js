import DoublyLinkedList from "./DoublyLinkedList.js";

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
});
