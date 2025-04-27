
function digSum(n) {
    if(n < 10) return n;
    return n % 10 + digSum(Math.floor(n / 10))
}
console.log(digSum(891));

// reverse number 

function digReverse(n, rev) {
    if(n == 0) return rev;
    return digReverse(Math.floor(n / 10), rev * 10 + (n % 10))
    
}
console.log(digReverse(891, 0));
