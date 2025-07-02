
class Stack{
    constructor() {
        this.items = [];

    }

    push(val) {
        this.items.push(val);
    }
    
    pop(val) {
        if(this.isEmpty()) {
            console.log("stack is empty");
            return         
        }
        this.items.pop(val);
    }
    
    isEmpty(){
        return this.items.length == 0;
    }

}

let obj = new Stack();
obj.push(10);
obj.push(20);
obj.push(30);

obj.pop();
console.log(obj.items);
