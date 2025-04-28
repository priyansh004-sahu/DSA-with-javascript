// my sqrt(x)

function mySqrt(n) {
    var i = 1;
    for (; i * i <= n; i++) {
        if (i * i == n) return i;
    }
    return i - 1;
}
console.log(mySqrt(15)); // Output: 4
