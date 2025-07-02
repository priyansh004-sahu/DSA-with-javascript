// A deque (pronounced "deck"), or double-ended queue, 
// is a linear data structure that allows insertion and deletion 
// of elements from both ends (front and rear). It combines features of both
//  queues and stacks, offering flexibility in how data is accessed and manipulated. 

    

class Queue{
    constructor() {
        this.items = [];
        this.front = this.rear = 0;
    }
    insertAtFirst(val){                 // first 
        this.front--;
        this.items[this.front] = val;
    }
    insertAtLast(val){                 // last ,
        // this.items.push(val)
        this.items[this.rear] = val;
        this.rear++;
    }
    deleteAtFirst(val){                // front, poll, dequeue
        if(this.isEmpty()) {
            console.log("queue is empty");
            return
        }
    //    this.items.shift(val);
     const data = this.items[this.front];
     delete this.items[this.front];
     this.front++;
     return data;
    }
    
    
    deleteAtLast(val) {
        this.rear--;
        let data = this.items[this.rear];
        delete this.items[this.rear]
        return data;
    }
    isEmpty(val) {
        // return this.items.length == 0;
        return this.front == this.rear
    }

    print() {
        for(var i=this.front; i<this.rear; i++) {
            process.stdout.write(this.items[i] + " ")
        }
    }
}

let obj = new Queue();

obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);
obj.insertAtFirst(30);

obj.insertAtLast(100)
obj.insertAtLast(100)

obj.deleteAtFirst()
obj.deleteAtLast()

obj.print()
