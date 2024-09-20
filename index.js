import DoublyLinkedList from "./lists/DoublyLinkedList.js";

const list = new DoublyLinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);

console.log(list.toArray()); // [1, 2, 3, 4]
list.removeFirst();
console.log(list.toArray()); // [2, 3, 4]
