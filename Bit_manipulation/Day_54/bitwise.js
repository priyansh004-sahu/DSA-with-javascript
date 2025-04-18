function sample(n) {
    let i = 0;
    let s = 0;

    while (n > 0) {
        let r = n % 10;
        let p = 8 ^ i; // Bitwise XOR
        s = s + p * r;
        i++;
        n = Math.floor(n / 10);
    }

    return s;
}

const result = sample(127);
console.log("Value of s:", result); // Output: 84 (with XOR logic)
