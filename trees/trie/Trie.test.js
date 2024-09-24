import Trie from "./index.js";

describe("Trie", () => {
	let trie;
	beforeEach(() => {
		trie = new Trie();
	});

	it("should search words correctly", () => {
		trie.insert("apple");
		trie.insert("app");
		trie.insert("ap");
		trie.insert("bat");
		trie.insert("bath");
		trie.insert("bathing");
		trie.insert("bathing");

		expect(trie.search("apple")).toBe(true);
		expect(trie.search("apples")).toBe(false);
		expect(trie.search("app")).toBe(true);
		expect(trie.search("ap")).toBe(true);
		expect(trie.search("bat")).toBe(true);
		expect(trie.search("bath")).toBe(true);
		expect(trie.search("bathing")).toBe(true);
		expect(trie.search("bathing")).toBe(true);
		expect(trie.search("bathingg")).toBe(false);
	});

	it("should remove words correctly", () => {
		trie.insert("apple");
		trie.insert("app");
		trie.insert("ap");
		trie.insert("bat");
		trie.insert("bath");
		trie.insert("bathing");
		trie.insert("bathing");

		expect(trie.remove("apple")).toBe(true);
		expect(trie.remove("app")).toBe(true);
		expect(trie.remove("ap")).toBe(true);
		expect(trie.remove("bat")).toBe(true);
		expect(trie.remove("bath")).toBe(true);
		expect(trie.remove("bathing")).toBe(true);
		expect(trie.remove("bathing")).toBe(false);
		expect(trie.remove("bathingg")).toBe(false);
	});

	it("should not remove words that do not exist", () => {
		trie.insert("apple");
		trie.insert("app");
		trie.insert("ap");

		expect(trie.search("apple")).toBe(true);
		expect(trie.search("appl")).toBe(false);
		expect(trie.remove("appl")).toBe(false);
		expect(trie.remove("apples")).toBe(false);
	});

	it("should remove words that are prefixes of other words", () => {
		trie.insert("apple");
		trie.insert("app");
		trie.insert("ap");

		expect(trie.search("apple")).toBe(true);
		expect(trie.search("app")).toBe(true);
		expect(trie.search("ap")).toBe(true);

		expect(trie.remove("ap")).toBe(true);
		expect(trie.search("ap")).toBe(false);
		expect(trie.search("apple")).toBe(true);
		expect(trie.search("app")).toBe(true);
	});

	it("should find words that start with a prefix", () => {
		trie.insert("apple");
		trie.insert("app");
		trie.insert("ap");

		expect(trie.startsWith("a")).toBe(true);
		expect(trie.startsWith("ap")).toBe(true);
		expect(trie.startsWith("app")).toBe(true);
		expect(trie.startsWith("appl")).toBe(true);
		expect(trie.startsWith("apple")).toBe(true);
		expect(trie.startsWith("apples")).toBe(false);
		expect(trie.startsWith("appb")).toBe(false);
		expect(trie.startsWith("b")).toBe(false);
	});
});
