 // constructor is a special type of method which initalize / create object in memory

 let animal = function(name, age, gender) {
   this.name = name;
   this.age = age;
   this.gender = gender;
 }
 let obj = new animal("priyansh", 22, "male")
 
 console.log(obj);

//  . Class and Object

class Person{
   constructor(name, age) {
    this.name = name;
    this.age= age;
   }
   greet() {
    console.log(`my name is ${this.name} and my age is ${this.age}`);
    
   }
}
var ans = new Person("priyansh", 21);
console.log(ans);
ans.greet();


// literal object
const car = {
   brand : "honda",
   start() {
      console.log("car started");      
   },
};
car.start();

// Constructor & Constructor Function

function Student(name, roll) {
  this.name = name;
  this.roll = roll;
  this.display = function () {
    console.log(`Name: ${this.name}, Roll: ${this.roll}`);
  };
}

const s1 = new Student("Ravi", 101);
s1.display();

// Prototype Object