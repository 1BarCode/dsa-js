class ListNode {
	constructor(key, value, hash, next = null) {
		this.key = key;
		this.value = value;
		this.hash = hash;
		this.next = next;
	}
}

export default class MapLinkedList {
	constructor() {
		this.sentintel = new ListNode(null, null, null);
		this.tail = this.sentintel;
		this.size = 0;
	}

	length() {
		return this.size;
	}

	isEmpty() {
		return this.size === 0;
	}

	getHead() {
		return this.sentintel.next;
	}

	addLast(key, value, hash) {
		this.tail.next = new ListNode(key, value, hash, null);
		this.tail = this.tail.next;
		this.size++;
	}

	contains(key) {
		let current = this.sentintel.next;
		while (current !== null) {
			if (current.key === key) return true;
			current = current.next;
		}
		return false;
	}

	get(key) {
		let current = this.sentintel.next;
		while (current !== null) {
			if (current.key === key) return current.value;
			current = current.next;
		}
		return null;
	}

	set(key, value, hash) {
		let current = this.sentintel.next;
		while (current !== null) {
			if (current.key === key) {
				const oldValue = current.value;
				current.value = value;
				current.hash = hash;
				return oldValue;
			}
			current = current.next;
		}
		return null;
	}

	remove(key) {
		let current = this.sentintel;
		while (current.next !== null) {
			if (current.next.key === key) {
				const removed = current.next;
				current.next = current.next.next;
				this.size--;
				if (this.tail === removed) this.tail = current;
				if (this.isEmpty()) this.tail = this.sentinel;
				return removed.value;
			}
			current = current.next;
		}
		return null;
	}

	toArray() {
		const array = [];
		let current = this.sentintel.next;
		while (current !== null) {
			array.push(current.value);
			current = current.next;
		}
		return array;
	}
}
