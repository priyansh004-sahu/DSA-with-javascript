// function Toffee(name) {
//     this.name = name;
//     this.price = 10;
// }
// var t1 = new Toffee("alpenliebe");
// var t2 = new Toffee("Mango bite");

/*
1
// jab bhi constructor banaaoge aur kuchh aisa mil gaya jop ki sabmein same hai to usey kabhi bhi direct 
// constructor mein banana galat tareeka hota hai, par sahi tareeka hai prototype ka use karna kyuki
//  prototype mein save karne par jitne bhi new ke saath instance banaaoge wo saare instance by default
//  tumhaari proto ki value ko hold karege
*/


function Toffee(name) {
    this.name = name;
}

Toffee.prototype.price = 10;

var t1 = new Toffee("alpenliebe");
var t2 = new Toffee("Mango bite");

//
function Human(name, age, isHandsome) {
    this.name = name;
    this.age = age;
    this.isHandsome = isHandsome;
}
Human.prototype.sayHello = function() {
    console.log('hello'); 
}
var h1 = new Human("priyansh", 21, true);
var h2 = new Human("Harsh", 21, true);

// sabse phale  property ko appke object mein dhundege, nahi mila to protoytpe mein dhunte hai

function Toffee_2(name) {
    this.name = name;
    this.price = 34;
}
Toffee_2.prototype.price = 10;

var t_1 = new Toffee_2("alpenliebe");
var t_2 = new Toffee_2("Mango bite");


// 
function Cupcake_1(name, price) {
    this.price = price;
    this.name = "#$" + name;
    this.printMyName = function() {
        console.log(this.name);  
    };
}
var c1 = new Cupcake_1("kaccha aam", 2);
var c2 = new Cupcake_1("Mango bite", 1);


function Employee(name, age, id, salary) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.salary = salary;
}
Employee.prototype.printDetails = function() {
    console.log(`${this.name} is my name and I am ${this.age} years old and my id is ${this.id}
      and my salary is ${this.salary}`);
    
}
var e1 = new Employee("priyansh", 21, 98339, 50000)
var e2 = new Employee("Harsh", 21, 8900, 50000)