
// //Q80. Count of Primes (Sieve of Eratosthenes)

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



// leetcede only print count
function countPrimes(n) {
    if (n <= 2) return 0;

    let isPrime = new Array(n).fill(true);
    
    // Sieve of Eratosthenes
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    // Count primes
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }
    
    return count;
}
 var n = 31;
console.log(countPrimes(n))