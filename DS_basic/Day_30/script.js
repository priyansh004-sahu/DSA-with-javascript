//Q. Accept an integer and Print hello world n times

var n = 3;
if(isNaN(n)) {
    console.log("invalid inpuut");
} else {
    var i;
    for(i=1; i<= n; i++) {
        console.log(i);      
    }
    console.log("fail at  " + i);  
}
console.log(" ")
// Q. Print natural number up to n.

var n=5;
for(var  i=1; i<=n; i++) {
    console.log(i);
}
console.log(" ")

// Q. Reverse for loop. Print n to 1.

var n = 5;
for(var i = n; i >=1; i-- ) {
    console.log(i);  
}
console.log(" ");

/* Q. Take a number as input and print its table
     5 * 1 = 5
     5 * 2 = 10 ... up to 10 terms
 */

var n = 10;
var val = 5;
console.log("Multiplication Table of " + val);

for(var i=1; i<=n; i++) {
    console.log(`${val} * ${i} = ${val * i}`); 
}

console.log(" ");


// sum up of to n terms

var sum = 0;
for(var i=1; i<=5; i++) {
    sum += i;

}
console.log(sum);

console.log(" ");

// Q. Factorial of a number

var fact = 1;
for(var i=1; i<=5; i++) {
    fact *= i;
    
}
console.log(fact);

console.log(" ");


//  Q. Print the sum of all even & odd numbers in a range seperately.

    var n = 10;
     var evensum = 0;
    var oddsum = 0;

  for(var i=0; i<=n; i++) {
    if(i  % 2 == 0) {
        evensum += i;
    }else {
        oddsum += i
    }
  }
  console.log("Even sum is :- " + evensum);
  console.log("0dd sum is :- " + oddsum);
  
  console.log(" ");

//  Q. Print all the factors of a number.

var n = 10;
for(var i=0; i<=n/2; i++) {
    if(n % i == 0) console.log(i); 
}

console.log(" ");

//  Q. Check if the number is Prime or not.
var n = 5;
var isPrime = true;

if (n < 2) {
    isPrime = false;
} else {
    for (var i = 2; i <= n/2; i++) {      //  half the loop
        if (n % i === 0) { 
            isPrime = false;
            break;
        }
    }
}

if (isPrime) console.log(n + " is a prime number");
else console.log(n + " is not a prime number");

console.log(" ");

//  prime Number optimize method

var n = 45  ;

var  isPrime =  isPrimefun(n);
if(isPrime) console.log(n + " is aprime number");
else console.log(n +" not a prime number");

function isPrimefun(n)  {
    if(n <= 1) return false;
    if(n == 2) return true;
    if(n % 2 == 0) return false;
    for(var i=3; i<= Math.floor(Math.sqrt(n)); i +=2) {
        if(n % i == 0) return false;
    }
    return true;
}
// 2 => 6
//  3, 5



//  Q. Write a program to take two inputs a, b & find the value of a  raised to the power of b.
// Ex - a = 2, b = 5 
// OP - 2^5 = 32

function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
var a = 2, b = 5;
console.log(`${a}^${b} = ${power(a, b)}`);



