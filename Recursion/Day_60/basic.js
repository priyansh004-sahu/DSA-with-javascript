
//  Q74. Print natural numbers  n to 1 (using recursion) 

function tempReverse(n) {
    if(n == 0) return
    process.stdout.write(n + " ");
    tempReverse(n - 1)
}
tempReverse(5)
console.log(" ");

// Print natural numbers 1 to n
function tempforward(n) {
    if(n == 0) return
    tempforward(n - 1)
    process.stdout.write(n + " ");
}
tempforward(5)
console.log(" ");

// Q75. Factorial / Sum (using recursion)


function Sum(n) {
        if (n == 1) return 1;
        return n + Sum(n - 1);
    }    
console.log(Sum(5)); // Output: 15

// Factorial

function Factorial(n) {
    if(n == 1) return 1;
    return n * Factorial(n-1)
}
console.log(Factorial(5));


// Fibnoacii series

function fib(n) {
    if(n==0 || n== 1) return n;
      return fib(n-1) + fib(n-2);
};
console.log(fib(7));

// sum of digit

