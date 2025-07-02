

class Queue{
    constructor() {
        this.items = [];
        this.front = this.rear = 0;
    }
    offer(val){                 // last , offer, enqueue
        // this.items.push(val)
        this.items[this.rear] = val;
        this.rear++;
    }
    poll(val){                // front, poll, dequeue
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
obj.offer(10);
obj.offer(20);
obj.offer(30);
obj.offer(40);
obj.poll();  //delete
obj.poll();

obj.offer(20);
// console.log(obj.items);

obj.print();
console.log(obj.items);
