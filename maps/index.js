import MapLinkedList from "./MapLinkedList.js";

export default class HashMap {
	static INITIAL_CAPACITY = 16;
	constructor() {
		this.capacity = HashMap.INITIAL_CAPACITY;
		this.size = 0;
		this.buckets = new Array(this.capacity).fill(null).map(() => new MapLinkedList());
	}

	// uses Daniel J Bernstein version: performs well for hashing short English strings
	#multiplicativeStringHash(key) {
		const initialStringHashValue = 5381;
		const multiplier = 33; // often prime

		const stringKey = key.toString();
		let hash = initialStringHashValue;
		for (let i = 0; i < stringKey.length; i++) {
			hash = hash * multiplier + stringKey.charCodeAt(i);
		}
		return hash % this.capacity;
	}

	#hash(key) {
		return this.#multiplicativeStringHash(key);
	}

	#resize() {
		const oldBuckets = this.buckets;
		this.capacity *= 2;
		this.buckets = new Array(this.capacity).fill(null).map(() => new MapLinkedList());
		this.size = 0;

		for (const bucket of oldBuckets) {
			let current = bucket.getHead();
			while (current !== null) {
				const { key, value } = current;
				this.put(key, value);
				current = current.next;
			}
		}
	}

	getSize() {
		return this.size;
	}

	isEmpty() {
		return this.size === 0;
	}

	put(key, value) {
		const index = this.#hash(key);
		const bucket = this.buckets[index];

		// check if key already exists
		if (bucket.contains(key)) {
			const oldData = bucket.set(key, value, index);
			return oldData;
		}

		bucket.addLast(key, value, index);
		this.size++;

		// resize if load factor exceeds 0.75
		if (this.size / this.capacity > 0.75) this.#resize();

		return null;
	}

	get(key) {
		const index = this.#hash(key);
		const bucket = this.buckets[index];

		if (!bucket.contains(key)) return null;

		return bucket.get(key);
	}

	delete(key) {
		const index = this.#hash(key);
		const bucket = this.buckets[index];

		if (!bucket.contains(key)) return null;

		const removed = bucket.remove(key);
		this.size--;
		return removed;
	}

	contains(key) {
		const index = this.#hash(key);
		const bucket = this.buckets[index];
		return bucket.contains(key);
	}
}
