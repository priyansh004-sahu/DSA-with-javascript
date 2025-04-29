 function myPow(x, n) {
    if (n === 0) return 1.0;  // Side corners
    if (x === 0) return 0.0;
    if (x === 1) return 1.0;

    let binform = n;
    if (n < 0) {
        x = 1 / x;
        binform = -binform;
    }

    // JavaScript numbers are all floating-point, so no need for 'long'
    binform = Math.abs(binform); 
    let ans = 1;

    while (binform > 0) {
        if (binform % 2 === 1) {
            ans *= x;
        }
        x *= x;
        binform = Math.floor(binform / 2); // Make sure it's integer division
    }

    return ans;
};

console.log(myPow(2.00000,10));


function myPow(x, n) {
   if(n == 0) return 1.0;
   return n < 0 ? temp(x, n): temp (x,n)
}

function temp(x, n) {
    if(n == 0) return 1;
    let ans = temp(x, parseInt(n/2));
    if(n % 2) return ans * ans;
    return ans * ans * x;
}