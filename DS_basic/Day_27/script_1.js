//    JavaScript Interview Questions

var a = 10   //  11 => 12
console.log(a++ + ++a);

var a = 11, b = 22, c;
c = a + b + a++ + b++ + ++a + ++b;
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);

var i = 0;
i = i++ - --i + ++i - i--;
console.log(i);

var b = true;
b++;
console.log(b);

// complex problem


var i = 1, j = 2, k = 3;
var m = i-- - j-- - k--;
console.log("i = " + i);
console.log("j = " + j);
console.log("k = " + k);
console.log("m = " + m);



var a = 1, b = 2;
console.log(--b - ++a + ++b - --a);



var i = 19, j = 29, k;
k = i--  - i++ + --j - ++j + --i - j-- + ++i - j++;
console.log("i=" + i);
console.log("j=" + j);
console.log("k=" + k);

// 3. Syntax Errors and Logical Issues

// Q8:            not possible into number
// var i = 11;
// var j = --(i++);

// // Q9:
var m = 0, n = 0;
var p = --m * --n * n-- * m-- ;
console.log(p);

// // Q10:
var a = 1;
a = a++ + ++a * --a - a--;
console.log(a);

// // Q11:                   not possible into number
// var a = 11++;
// console.log(a);

// // Q12:
var i = 0, j = 0;
console.log(--i * i++ * ++j * j++);
