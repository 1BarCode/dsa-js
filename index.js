import Trie from "./trees/trie/index.js";

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("ap");
trie.insert("bat");
trie.insert("bath");
trie.insert("bathing");
trie.insert("bathing");

// console.log(trie.search("apple")); // true
// console.log(trie.search("app")); // true
// console.log(trie.remove("ap"));
// console.log(trie.search("ap")); // false
// console.log(trie.search("app")); // true
// console.log(trie.search("apple")); // false
