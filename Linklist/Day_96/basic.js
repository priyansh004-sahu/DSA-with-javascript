// create node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// let obj = new Node(18);
// console.log(obj);

// create linklist

class linklist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertatFirst(val) {
    this.size++;
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  insertatLast(val) {
    this.size++;
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  deleteatFirst() {
    if (this.head == null) {
      console.log("empty list");
      return;
    }
    this.size--;
    this.head = this.head.next;
  }
  deleteatLast() {
    if (this.head == null) {
      console.log("empty list");
      return; 
    }
    this.size--;
    if(this.head.next == null) {
      this.head = null;
      return;
    }
    let temp = this.head;
    while(temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
  }

  printLL() {
    if (this.head == null) {
      console.log("empty list");
      return;
    }
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.val + " -> ");
      temp = temp.next;
    }
    console.log("null");
  }
}

let obj = new linklist();
obj.insertatFirst(10);
obj.insertatFirst(20);
obj.insertatFirst(30);
obj.insertatFirst(40);
obj.insertatFirst(50);
obj.printLL();

obj.insertatLast(100);
obj.insertatLast(200);
obj.insertatLast(500);
obj.printLL();

obj.deleteatFirst();
obj.printLL();

obj.deleteatLast();
obj.printLL();
