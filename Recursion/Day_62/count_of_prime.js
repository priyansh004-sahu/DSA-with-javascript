
//Q80. Count of Primes (Sieve of Eratosthenes)

//Brute force
var n = 31;
for (var i = 2; i <= n; i++) {
    var isPrime = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        process.stdout.write(i + " ");
    }
}

console.log(" ");



function countPrimeNum(n) {
    let isPrime = new Array(n+1).fill(true);

     for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if(isPrime[i] == true) {
            for(var j=i*i; j<=n; j += i) {
                isPrime[j] = false;
            }
        }

     }
     for(var i=2; i<isPrime.length; i++) {
        if(isPrime[i]) process.stdout.write(i + " ")
     }
 }
var n = 31;
countPrimeNum(n)