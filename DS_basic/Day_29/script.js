// leap year=>  A year is a leap year if it's divisible by 4, except for years that are divisible
//  by 100 but not by 400

let year = 2002;
let isLeap = false;

if(year % 4 == 0) {
    if(year % 100 == 0) {
      if(year % 400 == 0) isLeap = true;   //  agar wo 400 gya tho leap year ha
      else isLeap = false;           // not a leap year
    } else {
        isLeap = true;
    }
} else {
    isLeap = false;
}
console.log(
     isLeap ? "it is a leap year" : "its not a leap year"
);

// discout caalculator
var amount = 6000;
if(amount >= 0 && amount <= 5000) {
   console.log(amount);  
} else if(amount >= 5000 && amount <= 7000) {
  console.log(amount - (5 * amount) / 100);

} else if(amount >= 7000 && amount <= 9000) {
    console.log(amount - (10 * amount) / 100);
} else if (amount > 9000){
  console.log(amount - (20 * amount) / 100);
    
} else {
    console.log("Invalid Input");   
}

// discout caalculator => second method

var amount = 1080;
var discount = 0;
if(amount >= 0 && amount <= 5000) discount = 0;
else if(amount >= 5000 && amount <= 7000)  discount = 5;
else if(amount >= 7000 && amount <= 9000) discount = 10;
else if (amount > 9000) discount = 20;
else {console.log("Invalid Input");}

console.log(amount - (discount* amount) / 100 + " second method se");


//  bijli ka bill brute force approach


var unit = 120;
var amount = 0;

if(unit > 0 && unit <= 100) {
     amount = unit * 4.2;
}
else if(unit >= 100 && unit <= 200) {   //120
      amount = (100 * 4.2) + (unit - 100) * 6;
}
else if (unit >= 200 && unit <= 400) {  // 250
    amount = (100 * 4.2) + (100 * 6) + (unit - 200) * 8;  
}
else if(unit > 400) {    //550
    amount = (100 * 4.2) + (100 * 6) +  (200 * 8) + (unit - 400) * 13;   
}

console.log(amount);


//  bijli ka bill  optimize approach

var unit = 150;
var amount = 0;

if(unit > 400) {
   amount = (unit - 400) * 13;
    unit = 400;
}
if(unit >= 200 && unit <= 400) {
   amount = amount + (unit - 200) * 8;
   unit = 200;
}
if(unit > 100 && unit <=  200) {
   amount = amount + (unit - 100) * 6;
   unit = 100;
}
amount = amount +  (unit * 4.2);
console.log(amount);

console.log(" ");
console.log(" ");
console.log(" ");

// 1. Problem Statement: Indian Currency Notes Breakdown

var amount = 1000;
let denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

for (let note of denominations) {
    let count = Math.floor(amount / note);
    amount = amount - (count * note); // Using subtraction instead of modulus
    if(count > 0) {
        console.log(`₹${note} x ${count}`);
    }
}

console.log(" ");

// 2.Write a program to accept rating of the movie as double and Movie
// name as String.

let rating = 2;
let MovieName = "RRR";

if(rating >= 0.0 && rating <= 2.0) {
   console.log(MovieName + " is a Flop movie" );
   
}
else if(rating >= 2.0 && rating <= 3.4) {
    console.log(MovieName + " is a semihit movie" );
}
else if(rating >= 3.5 && rating <= 4.5) {
    console.log(MovieName + " is a Hit movie" );
  
}
else if(rating >= 4.5 && rating <= 5.0) {
    console.log(MovieName + " is a SuperHit movie" );
   
}
else {
    console.log("Invalid input");
    
}