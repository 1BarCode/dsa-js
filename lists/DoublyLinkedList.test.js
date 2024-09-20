import DoublyLinkedList from "./DoublyLinkedList.js";

test("DoublyLinkedList", () => {
	const list = new DoublyLinkedList();
	for (let i = 1; i <= 4; i++) {
		list.addLast(i);
	}

	expect(list.toArray()).toEqual([1, 2, 3, 4]);
	expect(list.length()).toBe(4);
});

test("DoublyLinkedList removeFirst", () => {
	const list = new DoublyLinkedList();
	for (let i = 1; i <= 4; i++) {
		list.addLast(i);
	}

	const removed = list.removeFirst();

	expect(removed).toBe(1);
	expect(list.toArray()).toEqual([2, 3, 4]);
	expect(list.length()).toBe(3);
});

test("DoublyLinkedList removeLast", () => {
	const list = new DoublyLinkedList();
	for (let i = 1; i <= 4; i++) {
		list.addLast(i);
	}

	const removed = list.removeLast();

	expect(removed).toBe(4);
	expect(list.toArray()).toEqual([1, 2, 3]);
	expect(list.length()).toBe(3);
});

test("DoublyLinkedList addFirst", () => {
	const list = new DoublyLinkedList();
	for (let i = 1; i <= 4; i++) {
		list.addFirst(i);
	}

	expect(list.toArray()).toEqual([4, 3, 2, 1]);
	expect(list.length()).toBe(4);
});

test("DoublyLinkedList getFirst", () => {
	const list = new DoublyLinkedList();
	for (let i = 1; i <= 4; i++) {
		list.addLast(i);
	}

	expect(list.getFirst()).toBe(1);
	expect(list.length()).toBe(4);
});

test("DoublyLinkedList getLast", () => {
	const list = new DoublyLinkedList();
	for (let i = 1; i <= 4; i++) {
		list.addLast(i);
	}

	expect(list.getLast()).toBe(4);
	expect(list.length()).toBe(4);
});
