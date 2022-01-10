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

  insert(index, newNode) {
    let firstNode = this.indexOf(index);
    let secondNode = firstNode.next;
    // newNode is the third node
    firstNode.next = newNode;
    newNode.next = secondNode;
  }

  remove(index) {
    let firstNode = this.indexOf(index - 1)
    let removeNode = firstNode.next
    let secondNode = removeNode.next // before deleting, its third node
    firstNode.next = secondNode


    // if (index == 0) {
    //   removeNode = this.head
    // }
    // else {
      
    // }

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
const test = list.indexOf(2);
list.insert(0, new Node(999));
list.print();
list.remove(2)
list.print();
