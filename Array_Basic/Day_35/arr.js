// strong Number   
var ans = 0, n = 2, copy = n;
while(n > 0) {
    var dig = n % 10; // extrct num
    var fact = 1;
    for(var i=1; i<=dig; i++) {
        fact *= i;
    }
    ans = ans + fact;
    n = Math.floor(n/10);
}
if(copy == ans) console.log("Strong number");
else console.log("not strong number");


// array basic

var arr = [10, 20, 30, 40];
arr.push(50);  // insert in last of array
arr.unshift(5);   // insert in starting
arr.pop();     // delete from last
arr.shift()    // delete from start
arr[10] = 1000;
console.log(arr);

// create new array
var arr = new Array(4);
arr[0] = 10;
arr[1] = 10;
arr[2] = 10;
arr[3] = 10;
console.log(arr);


// — Accept value from user and assign in the array

// var prompt = require("prompt-sync")();
// var size = Number(prompt("enter a array size"));
// var arr = new Array(size);
// for(var i=0; i< arr.length; i++) {
//     arr[i] = Number(prompt("Enter a element"));
// }
// console.log(arr);

// — Q 23. Sum of array’s element

var arr = [10, 20, 30, 40 , 50];
var sum = 0;
for(var i=0; i< arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

// — Q 24. Max element from array

var  arr = [10, 2, 5, 19, 4, 90];
var max = arr[0];
for(var i=1; i< arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);

// — Q 25. Min  element from array


var  arr = [10, 2, 5, 19, 4, 90];
var min = arr[0];
for(var i=1; i< arr.length; i++) {
    if(arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);
