const { Node } = require("./LinkedList");
const { LinkedList } = require("./LinkedList");

class HashTable {
  constructor(length = 10) {
    this.table = new Array(length);
    this.length = length;
  }
  hash(name) {
    // todo: implement hash here. should return between 0 and length
    let key = 0;
    for (let i = 0; i < name.length; i++) {
      key = key + name.charCodeAt(i);
      key = key % 10;
    }
    return key;
  }

  put(name) {
    const data = new Node(name);
    const key = this.hash(name);
    if (!this.table[key]) {
      const list = new LinkedList(data);
      this.table[key] = list;
    } else {
      this.table[key].push(data);
    }
  }

  get(name) {
    this.table[this.hash(name)].print();
  }

  delete(name) {
      const key = this.hash(name);
      if (this.table[key].indexOf(key) == 0) {
          // remove
      }
  }
}

const newTable = new HashTable(10);
newTable.put("saman");
newTable.put("elham");
newTable.put("ali");
newTable.put("vida");
newTable.put("aynaz");
newTable.put("navid");
newTable.delete("vida");
// newTable.get("ali");
// console.log(newTable.table);
