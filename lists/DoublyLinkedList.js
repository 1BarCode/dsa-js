class ListNode {
	constructor(data = undefined, prev = null, next = null) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

export default class DoublyLinkedList {
	constructor() {
		this.sentinel = new ListNode();
		this.tail = this.sentinel;
		this.size = 0;
	}

	length() {
		return this.size;
	}

	isEmpty() {
		return this.size === 0;
	}

	addLast(data) {
		this.tail.next = new ListNode(data, this.tail, null);
		this.tail = this.tail.next;
		this.size++;
	}

	addFirst(data) {
		if (this.isEmpty()) {
			this.addLast(data);
			return;
		}
		this.sentinel.next = new ListNode(data, this.sentinel, this.sentinel.next);
		this.size++;
	}

	removeFirst() {
		if (this.isEmpty()) {
			return null;
		}
		const data = this.sentinel.next.data;
		const successor = this.sentinel.next.next;
		this.sentinel.next = successor;

		if (successor) {
			successor.prev = this.sentinel;
		} else {
			this.tail = this.sentinel;
		}
		this.size--;

		return data;
	}

	removeLast() {
		if (this.isEmpty()) {
			return null;
		}
		const data = this.tail.data;
		this.tail = this.tail.prev;
		this.tail.next = null;
		this.size--;

		return data;
	}

	getFirst() {
		return this.isEmpty() ? null : this.sentinel.next.data;
	}

	getLast() {
		return this.isEmpty() ? null : this.tail.data;
	}

	toArray() {
		const array = [];
		let current = this.sentinel.next;
		while (current) {
			array.push(current.data);
			current = current.next;
		}
		return array;
	}
}
