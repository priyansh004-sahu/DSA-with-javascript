// factorial of n number

function nfactorial(n) {     // 0(n) // 0(n)
    if (n === 0) return 1;
    return n * nfactorial(n - 1);
}

var n = 4;
console.log(nfactorial(n)); // Output: 24

// sum of n Number

function sumofN(n) {        // 0(n) // 0(n)
    if (n === 0) return 1;
    return n + sumofN(n - 1);
}
var n = 5;
console.log(sumofN(n));


