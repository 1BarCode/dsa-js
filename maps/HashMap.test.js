import HashMap from ".";

describe("HashMap", () => {
	let map;
	beforeEach(() => {
		map = new HashMap();
	});

	it("should set up correctly", () => {
		expect(map.getSize()).toBe(0);
		expect(map.isEmpty()).toBe(true);
	});

	it("should put key-value pair", () => {
		expect(map.put("key1", "value1")).toBe(null);
		expect(map.get("key1")).toBe("value1");
		expect(map.getSize()).toBe(1);
		expect(map.isEmpty()).toBe(false);

		expect(map.put("key2", "value2")).toBe(null);
		expect(map.get("key2")).toBe("value2");
		expect(map.getSize()).toBe(2);
		expect(map.isEmpty()).toBe(false);
	});

	it("should replace value for existing key", () => {
		map.put("key1", "value1");
		expect(map.put("key1", "value2")).toBe("value1");
		expect(map.get("key1")).toBe("value2");
		expect(map.getSize()).toBe(1);
		expect(map.isEmpty()).toBe(false);
	});

	it("should delete key-value pair", () => {
		map.put("key1", "value1");
		expect(map.delete("key1")).toBe("value1");
		expect(map.get("key1")).toBe(null);
		expect(map.getSize()).toBe(0);
		expect(map.isEmpty()).toBe(true);
	});

	it("should return null for non-existing key", () => {
		expect(map.get("key1")).toBe(null);
		expect(map.delete("key1")).toBe(null);
	});

	it("should resize when load factor exceeds 0.75", () => {
		const n = Math.floor(0.75 * HashMap.INITIAL_CAPACITY) + 1;
		for (let i = 0; i < n; i++) {
			map.put(`key${i}`, `value${i}`);
		}

		expect(map.getSize()).toBe(n);
		expect(map.isEmpty()).toBe(false);
		expect(map.get("key0")).toBe("value0");
		expect(map.get(`key${n - 1}`)).toBe(`value${n - 1}`);
		expect(map.capacity).toBe(HashMap.INITIAL_CAPACITY * 2);
	});
});
