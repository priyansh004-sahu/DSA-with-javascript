
//  Fibonacci Number
var n = 10;
var first = 0, second = 1;
process.stdout.write(first + " " + second + " ");
for(var i=1; i<=n-2; i++) {
    let third = first + second;
    process.stdout.write(third + " ");
    first = second;
    second = third;
}

console.log(" ");

function printFibonacci(n, first, second) {
    if (n === 0) return;
    let third = first + second;
    process.stdout.write(third + " ");
    printFibonacci(n - 1, second, third);
}

var n = 10;
var first = 0, second = 1;
process.stdout.write(first + " " + second + " ");

printFibonacci(n - 2, first, second);

console.log(" ");

 function fib(n) {
    if(n==0 || n== 1) return n;
      return fib(n-1) + fib(n-2);
};
console.log(fib(5));
