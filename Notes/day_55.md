
# ⚡️ Bitwise Operator: Shift Operators

## 1️⃣ Left Shift (`<<`)
- Shifts bits to the left.
- Each left shift = multiply by 2.

**Example:**
```javascript
let x = 5;         // Binary: 101
console.log(x << 1);  // Output: 10  (5 * 2)
```

---

## 2️⃣ Right Shift (`>>`)
- Shifts bits to the right.
- Each right shift = divide by 2 (floored for integers).

**Example:**
```javascript
let x = 8;         // Binary: 1000
console.log(x >> 1);  // Output: 4  (8 / 2)
```

---

## Q70: Swap Two Integers Without Third Variable — Using Bitwise XOR

```javascript
let a = 5, b = 7;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a, b);  // Output: 7 5
```

**Logic:**
- XORing twice with the same value restores the original value.

---

## Q71: Check Even or Odd — Using Bitwise AND

```javascript
function isEven(num) {
    return (num & 1) === 0;
}

console.log(isEven(4));  // true (Even)
console.log(isEven(7));  // false (Odd)
```

**Logic:**
- `num & 1` checks the last bit.
- `0` → Even, `1` → Odd.

---

## Q72: Check if a Number is Power of 2 — Using Bitwise AND

```javascript
function isPowerOfTwo(num) {
    return num > 0 && (num & (num - 1)) === 0;
}

console.log(isPowerOfTwo(8));   // true
console.log(isPowerOfTwo(10));  // false
```

**Logic:**
- Powers of 2 have only one `1` in binary.
- `(num & (num - 1))` will be `0` only for powers of 2.
