 
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