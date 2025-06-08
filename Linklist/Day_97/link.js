
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Linklist{
    constructor() {
        this.head = this.head;
        this.size = 0;
    }

    insertAtFirst(val) {
        this.size++;
        const newNode = new Node(val);
        if(this.head == null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    inserAtIndex(val, index) {
        if(index < 0 || index > this.size) {
            console.log("not possible");
            return;
        }
        this.size++;
        const newNode = new Node(val);
        if(this.head == null) {
            this.head = newNode;
            return
        }
        let temp = this.head;
        for(var i = 0; i < index-1; i++){ 
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }

    deleteAtIndex(index) {
        if(index < 0 || index >= this.size) {
            console.log("not possible to delete");   
            return;
        }
        if(this.head === null) {
            console.log("list is empty");
            return;
        }

        this.size--;
        let temp = this.head;
        for(let i=0; i<index-1; i++) {
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

let obj = new Linklist();
obj.insertAtFirst(10); // 0
obj.insertAtFirst(20); // 1
obj.insertAtFirst(30); // 2
obj.insertAtFirst(40); // 3
obj.insertAtFirst(50); // 4
obj.printLL();

obj.inserAtIndex(200, 3);
obj.printLL();

obj.deleteAtIndex(3);
obj.printLL();
