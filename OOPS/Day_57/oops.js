
// ye bc ha kya 
/* object ko create karna jo ki sirf data hold  naa kara unki functionality bhi hold Kare, aur aise object ko
create karna with blueprint model

{
   name: 'rohit';
}

hum ek class bannayge us class se kai object create karege, wo har object kuchh data hold karega and kucch 
functionality bhi hold karega jisko hum usme methods kahte ha , ye sab manully na karna pade ki hum oops ke
concepet follow karte ha
*/

/*
problem
agar tmhe kai sare object karna ho 
solution 
create class a make new object , hold each of data and last shared the method and data

class create to make a new object 
*/

// this old method to create --> jab js me class ka concept nahi tha

// constructor function
function Cupcake() {
    this.name = "choclate cake";
    this.variety = "creamy";
    this.prize = 1000 ;
}
var cake1 = new Cupcake();
console.log(cake1);

// agar function ko kabhi bhi call karte  time  tumhe new ka use kar liya turant maan ke blank object banyo
// jab bhi function me this ko dekho turant us blank object  ko yaaad  us jaga rakdo 

function Toffee(flavour, price, variety) {
    this.flavour = flavour;
    this.price = price;
    this.variety = variety;
}
var t1 = new Toffee("chocalte", 300, "three");
var t2 = new Toffee("vanilla", 200, "two");
var t3 = new Toffee("stwraberry", 300, "Five");

// new method to create --> direct class 

class Toffee_1{
    constructor() {
        this.flavor = "vanilla";
        this.color = "brown";
        this.taste = "sweet";
        this.texture = "hard";
        this.shape = "cube";
        this.size = "small";
        this.smell = "sweet";
        this.sound = "crunch";
        this.temperature = "room temperature";
        this.origin = "USA";
        this.ingredients = ["sugar", "butter", "milk", "vanilla extract"];
     }
}
var t1 = new Toffee_1();
console.log(t1);


// create more object easily
class Toffee_2{
    constructor(flavor, color, taste) {
        this.flavor = flavor;
        this.color = color;
        this.taste = taste;
     }
}
var t1 = new Toffee_2("chocalte", 'brown', "sweet");
var t2 = new Toffee_2("vanilla", "white", "sweet");
var t3 = new Toffee_2("stwraberry", "pink", "sweet");


