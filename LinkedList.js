class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  getLast() {
    // returns last node
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findLength() {
    let currentNode = this.head
    let length = 0
    // while(currentNode.next)
  }

  push(newNode) {
    // todo: implement push to list
    const last = this.getLast();
    last.next = newNode;
  }

  indexOf(index) {
    // let value;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (currentNode.next == null) return;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findIndex(node) {
    let lengthOfList = this.getLast()
    let currentNode = this.head;
    return lengthOfList
  }

  insert(index, newNode) {
    let firstNode = this.indexOf(index);
    let secondNode = firstNode.next;
    // newNode is the third node
    firstNode.next = newNode;
    newNode.next = secondNode;
  }

  remove(index) {
    if (index == 0) {
      let nextNode = this.head;
      this.head = nextNode.next;
    } else if (index == this.getLast()) {
      let beforeLastNode = this.indexOf(index - 1);
      beforeLastNode.next = null;
    } else {
      let firstNode = this.indexOf(index - 1);
      let removeNode = firstNode.next;
      let secondNode = removeNode.next; // before deleting, its third node
      firstNode.next = secondNode;
    }
  }

  print() {
    let printStatement = "";
    let currentNode = this.head;
    while (currentNode.next) {
      printStatement += currentNode.value + " -> ";
      currentNode = currentNode.next;
    }
    printStatement += currentNode.value;
    console.log(printStatement);
  }
}

const node1 = new Node(1);
const node2 = new Node(1123);
const node3 = new Node(54);
const list = new LinkedList(node1);
list.push(node2);
list.push(node3);
list.push(new Node(74));
list.push(new Node(234));
list.push(new Node(45645));
// const test = list.indexOf(2);
// list.insert(0, new Node(999));
// list.print();
// list.remove(6);
// console.log(list.indexOf(0));
// list.print();
// console.log(node1);
console.log(list.findIndex(node1));

module.exports = { LinkedList, Node };
