// Math Function And Conditionals new

console.log(Math.round(10.5));    // 11  -> Rounds to the nearest integer
console.log(Math.ceil(10.2));     // 11  -> Rounds up
console.log(Math.floor(10.9));    // 10  -> Rounds down
console.log(Math.trunc(10.999));  // 10  -> Removes the decimal part

console.log(Math.pow(2, 3));      // 8   -> 2 raised to the power of 3 (2³)
console.log(Math.sqrt(25));       // 5   -> Square root of 25
console.log(Math.cbrt(27));       // 3   -> Cube root of 27

console.log(Math.abs(-42));       // 42  -> Absolute value (removes negative sign)
console.log(Math.max(10, 20, 5)); // 20  -> Returns the largest number
console.log(Math.min(10, 20, 5)); // 5   -> Returns the smallest number

console.log(Math.random());       // Random number between 0 and 1
console.log((Math.random() * 10).toFixed(2)); // Random number between 0 and 10 (2 decimal places)

var a = 234.44744;
console.log(a.toFixed(2));      // point ke baad value


// interset rate        A = P×(1+ r/100)^t, CI = A - P

    // let p = Number(prompt("Enter the principal amount"));
    // let r = Number(prompt("Enter the rate of interest"));
    // let t = Number(prompt("Enter the time in years"));

//var CI = p * Math.pow((1 + r / 100), t - p);     // Corrected Math.pow usage
//console.log(CI);                                 // Compound interest (total amount - principal)

// otp maker

console.log(Math.floor(Math.random() *9000 + 1000));  // 0 t0 1000


// herons formula   A=  sqrt of s(s−a)(s−b)(s−c)


var a = 3;
var b = 4;
var c = 5;

if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("It is not possible to form a triangle");    
} 
else {
    let s = (a + b + c) / 2;  // Corrected semi-perimeter calculation
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Fixed formula
    console.log("Area of the triangle:", area);
}


// circumfernce of circle

let r = 3;
let circum = 2 * Math.PI * r;
console.log(circum);


//print greatest no.
var a = 12, b = 40;
if (a > b) {console.log(a + " it greatest");
} else console.log(b + " it greatest");

//check even or prime

var num = 15    ;
if(num % 2 == 0) console.log("even");
else console.log("odd");


var age = 19
var name = "Priyansh";
if(age >= 18) {
    console.log(name + " Yes, you are a valid voter");
} else console.error(name + " No, you are not valid voter");


// compare three no. 

var a = 1;
var b = 2;
var c = 3;
if(a > b && a > c) console.log(a);
else if (b > c) console.log(b);
else console.log(c);


//leap year check

var  year = 1900;
if(year % 4 == 0 &&  year % 100 !=  0 || year % 400 == 0) {
    console.log("It`s  a leap year");  
} else console.log("It`s not a leap year");
