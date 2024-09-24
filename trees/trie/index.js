class TrieNode {
	constructor() {
		this.children = {};
		this.isEndOfWord = false;
	}
}

export default class Trie {
	constructor() {
		this.root = new TrieNode();
	}

	insert(word) {
		let curr = this.root;
		for (let char of word) {
			if (!curr.children[char]) {
				curr.children[char] = new TrieNode();
			}
			curr = curr.children[char];
		}
		curr.isEndOfWord = true;
	}

	search(word) {
		let curr = this.root;
		for (let char of word) {
			if (!curr.children[char]) return false;
			curr = curr.children[char];
		}
		return curr.isEndOfWord;
	}

	#removeHelper(node, word, charIndex) {
		if (charIndex === word.length) {
			// invert isEndOfWord to false
			if (node.isEndOfWord) {
				node.isEndOfWord = false;
				return true; // removed
			}

			return false; // word not found/removed
		}

		// if char not found then word not found
		const char = word[charIndex];
		if (!node.children[char]) return false;

		// recursively call removeHelper for next character
		// ex: apple, after toggling isEndOfWord to false for "e", back on node "l" we check if children of e is empty and isEndOfWord is false, then delete e from children of p
		// since "e" has no children and is not end of word, we can delete it
		// every node must have children or isEndOfWord to keep it in trie
		const child = node.children[char];
		const removed = this.#removeHelper(child, word, charIndex + 1);
		if (Object.keys(child.children).length === 0 && !child.isEndOfWord && removed) {
			delete node.children[char];
		}
		return removed;
	}

	remove(word) {
		return this.#removeHelper(this.root, word, 0);
	}

	startsWith(prefix) {
		let curr = this.root;
		for (let char of prefix) {
			if (!curr.children[char]) return false;
			curr = curr.children[char];
		}
		return true;
	}
}
