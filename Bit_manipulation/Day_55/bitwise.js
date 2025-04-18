//  2️⃣ Right Shift (>>)
console.log(35 >> 3);
console.log(12 >> 2);
console.log(2 >> 1);

console.log(" ");
// 1️⃣ Left Shift (<<)

console.log(25 << 2);
console.log(" ");

// Q70: Swap Two Integers Without Third Variable — Using Bitwise XOR


var a = 10, b = 5;
// a = a+b;
// b = a-b;
// a = a-b;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a,b);


// Q72: Check if a Number is Power of 2 — Using Bitwise AND if((n & 1 )== 0) console.log("even");
var n = 8;
if((n & 1 )== 0) console.log("even");
else console.log('odd');
console.log(" ");

// Q72: Check if a Number is Power of 2 — Using Bitwise AND

// var n = 128;
// if((n &(n-1)) == 0) console.log(true);
// else console.log(false);

function isPowerOfTwo(num) {
    return num > 0 && (num & (num - 1)) === 0;
}

console.log(isPowerOfTwo(64));   // true
console.log(isPowerOfTwo(10));  // false