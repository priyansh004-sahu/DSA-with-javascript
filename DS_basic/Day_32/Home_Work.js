console.log("Home Work Question");

//  Q.1 ISBN Number

// let isbn = prompt("Enter a 10-digit ISBN:");
//     let sum = 0;
//     for (let i = 0; i < 10; i++) {
//         sum += isbn[i] * (i + 1);
//     }
//     var rem = sum % 11 === 0;
// console.log(rem ? "Valid ISBN" : "Invalid ISBN");

//  Q.2 HCF/GCD

var a = 20, b = 28;
gcd = 1;
for(var i=1; i<=Math.min(a,b); i++) {
    if(a % i == 0 && b % i== 0) {
        gcd = i;        
    }
}
console.log(gcd);


var a = 12, b= 18;
while (a > 0 && b > 0) {
    if(a > b) {
        a = a % b;
    }  else {
        b = b % a;
    }
}
if(a == 0) console.log(b);
else console.log(a);

// Q.3 Harshad Number

var n = 29;
var sum = 0;
var original = n; // Store original value

while(n > 0) {
    var rem = n % 10;
    sum += rem;
    n = Math.floor(n / 10);   // n ki value zero kardega
}

if(original % sum === 0) 
    console.log("It is a Harshad Number");
else 
    console.log("Not a Harshad Number");


// Q4. Perfect Square
var n = 5;
var sqrt = Math.sqrt(n);
     if(sqrt === Math.floor(sqrt)) console.log("Perfect Square");
     else {
        console.log(n + " Not a Perfect Square")
     }

// Q.5 Abundant Number

var n = 12;  // Change this to any number you want
var sum = 0;

for (let i = 1; i <= n/2; i++) {
    if (n % i === 0) {
      sum += i;
    }  
}
if(sum > n) {
    console.log("Abundant Number");
} else {
    console.log("Not a Abundant Number");
    
}

// Q.6 Fibonacci Series using Loop
var n = 6;
var a = 0, b = 1;
console.log(a);
if(n > 1) console.log(b);

for(var i=2; i< n; i++) {
    var next = a + b;   //  get two value 
    console.log(next);
    a = b;      //  assign the next value
    b = next;   //  assign the next value
}


//umbers with exactly three divisors are always squares of prime numbers.
console.log("Numbers with exactly three divisors are always squares of prime numbers.");

let limit = 100;

for (let i = 2; i * i <= limit; i++) {    // loop run 9 time
    let isPrime = true; 

    // Only check divisibility up to sqrt(i)
    for (let j = 2; j * j <= i; j++) {      // check evry no. is prime or not 
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    // Print square if 'i' is prime
    if (isPrime) {
        console.log(i * i);
    }
}


// Q8. Prime Factors in Javascript
 var num = 81; 
 var Factors= [];

 while(num % 2 === 0) {  // check for even number   2 is even prime number
    Factors.push(2);    
    num = num / 2;
 }

 for(var i=3; i <= Math.sqrt(num); i+= 2) {    
    while(num % i === 0) {           // check for left number always odd num
        Factors.push(i);
        num = num / i;
    }
 }
 if(num > 2) {
    Factors.push(num);
 }
 console.log(`prime factors of 30 is : ${Factors}`);
 
// Q.9  switch case
// Example values (you can modify these)
let choice = "Triangle"; // Options: "Circle", "Rectangle", "Triangle"
let radius = 5;        // For Circle
let length = 4;        // For Rectangle
let width = 3;         // For Rectangle
let base = 6;          // For Triangle
let height = 4;        // For Triangle

let area;

switch (choice.toLowerCase()) { // Convert to lowercase to handle "CIRCLE" or "circle"
    case "circle":
        area = Math.PI * radius * radius; // π * r²
        console.log(`Area of Circle = ${area.toFixed(1)}`); // Rounds to 1 decimal
        break;
    
    case "rectangle":
        area = length * width; // length * width
        console.log(`Area of Rectangle = ${area}`);
        break;
    
    case "triangle":
        area = 0.5 * base * height; // ½ * base * height
        console.log(`Area of Triangle = ${area}`);
        break;
    
    default:
        console.log("Invalid choice! Please select Circle, Rectangle, or Triangle.");
        break;
}

//Q.10  Neon number = > Description: A number where the sum of digits of its square equals the
// number itself.

var num = 9; // Example: 9
var square = num * num; // Square the number
var temp = square;
var sum = 0;

while (temp > 0) {
    sum += temp % 10; // Add the last digit
    temp = Math.floor(temp / 10); // Remove the last digit
}

if (sum === num) {
    console.log("The square of the number is " + square + " and sum is " + sum + " so it is a neon number");
} else {
    console.log("The square of the number is " + square + " but the sum of its digits is not equal to " + num);
}



// Q.11 

var N = 4;     // Example input
var sum = 0;   // Sum of even-indexed Fibonacci numbers
var a = 0;     // First Fibonacci number (index 0)
var b = 1;     // Second Fibonacci number (index 1)

// Include index 0 in the sum (even index)
sum += a;

// Generate Fibonacci numbers up to 2N index
for (var i = 2; i <= 2 * N; i++) {
    var next = a + b;
    // If current index i is even, add to sum
    if (i % 2 === 0) {
        sum += next;
    }
    // Update a and b for the next iteration
    a = b;
    b = next;
}

console.log(sum);  // Output: 33


// 12. Find the Largest Digit in a Number

var n = 3;
var maxdigit = 0;

while(n > 0) {
    var rem = n % 10;
     maxdigit = Math.max(maxdigit, rem);
    n = Math.floor(n / 10);      
}  
 console.log("maximum digit is : " + maxdigit);



// 13. Find LCM of Two Numbers  =>  LCM(a, b) = (a × b) / GCD(a, b).
var a = 12, b = 15;
 var sq = a * b; // Store the product before modifying a and 
 
 // Euclidean algorithm to find GCD, directly modifying a and b
 while (a > 0 && b > 0) {
     if (a > b) {
         a = a % b;
     } else {
         b = b % a;
     }
 }
 
 // Determine GCD
 var gcd = (a === 0) ? b : a;
 
 // Calculate LCM
 var lcm = sq / gcd;
 
 console.log( "the LCM is " +lcm); // Output: 60



 // Q.14 Find the Sum of Even Digits in a Number

 var num = 2384;
 var sum = 0;
 while(num > 0) {
    var digit = num % 10;
    if(digit % 2 === 0) {
        sum += digit;
    }
    num = Math.floor(num /10);
 } 
console.log(sum);


// 15. Number of Days in a Month



var month = 2; // February
var year = 2020;

// Function to check if the year is a leap year
var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Determine the number of days based on the month
var days;

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    days = 31; // Months with 31 days
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30; // Months with 30 days
} else if (month === 2) {
    // February: Check for leap year
    days = isLeapYear ? 29 : 28;
} else {
    console.log("Invalid month! Please enter a month between 1 and 12.");
    days = -1; // Indicate an error
}

// Output the result
if (days !== -1) {
    console.log(days); // Output: 29
}