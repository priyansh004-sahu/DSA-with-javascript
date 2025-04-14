let ab = 10;
console.log(ab);


let bb = 10;
let c = 20;
console.log( bb + c);

/*
   string + string = string(concatenation)
   string + intger = string (concatenation)
   int + int = int ( arthmatic)
*/
var x = " hello"; 
var y = " world"; 
console.log(typeof(x + y));

var x = " hello"; 
var y = 100; 
console.log(typeof(x + y));

var x = 10; 
var y = 100; 
console.log(typeof(x + y));

var x = 10;
var y = 20;

console.log("sum of " + x +  " and " + y + " is " + x+y);  //it ha concatenation
console.log("sum of " + x +  " and " + y + " is " + (x+y));  
 
// let age = Number(prompt("enter a age"));
console.log("age");


//swap 2 value

var x = 10;
var y = 20;
var temp;

temp = x;
x = y;
y = temp;
console.log(x, y); // Output: 20 10

[x,y] = [y,x];                       // using array
console.log(x, y); // Output:  10 20


var a = 10;                      //using + and -
var b = 20;

a = a + b  // a = 30
b = a-b;  // b = 10
a = a-b;  // a = 20
console.log(a,b);

console.log(9 % 3);  // when dividennt is samll than divisor always same value of dividient

console.log(10/3);  //it type are float value to change using math.floor()
console.log(Math.floor(10 / 3));


console.log(10 >= 13 && 40 <  70 && 100 > 20);


//unary operator  => increment and decrement

var a = 10;
var b = ++a;
console.log(a);
console.log(b);


