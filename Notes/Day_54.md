# 📘 Notes of the Day - Day 54

---

## Q67. Two Sum

**Problem:**  
Given an array of integers `nums` and a `target`, return the indices of the two numbers such that they add up to `target`.

### ✅ Approach 1: Brute Force (O(n²))

```javascript
function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
```

### ⚡ Approach 2: Hash Map (O(n))

```javascript
function twoSum(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```

---

## Q68. First Letter Appears Twice

**Problem:**  
Given a string, find the first character that appears twice.

### ✅ Approach 1: Set Lookup (O(n))

```javascript
function repeatedCharacter(s) {
    let seen = new Set();

    for(let char of s) {
        if(seen.has(char)) return char;
        seen.add(char);
    }
    return null;
}
```

### ⚡ Approach 2: Map for Frequency Counting

```javascript
function repeatedCharacter(s) {
    let freq = new Map();

    for(let char of s) {
        if(freq.has(char)) {
            freq.set(char, freq.get(char) + 1);
            if(freq.get(char) === 2) return char;
        } else {
            freq.set(char, 1);
        }
    }

    return null;
}
```

**Explanation:**  
- A `Map` stores the frequency of each character.  
- When any character’s count reaches `2`, that’s your answer.  
- If none reaches 2, return `null`.

---

## Q69. Sort the People

**Problem:**  
Given names and corresponding heights, sort the people in descending order by height.

```javascript
let names = ["Alice", "Bob", "Charlie"];
let heights = [165, 180, 175];
```

**Expected Output:**
```javascript
["Bob", "Charlie", "Alice"]
```

### ✅ Approach

```javascript
var sortPeople = function(names, heights) {
    let map = new Map();
    for(let i = 0; i < names.length; i++) {
        map.set(heights[i], names[i]);
    }

    heights.sort((a, b) => b - a);

    let ans = new Array(names.length);
    for(let i = 0; i < ans.length; i++) {
        ans[i] = map.get(heights[i]);
    }

    return ans;
};
```

---

## 📃 Number Conversion & Bitwise Operators

---

### ✅ 1️⃣ Decimal to Binary Process

**Steps:**
1. Divide the number by 2.
2. Record the remainder (0 or 1).
3. Repeat until quotient is 0.
4. Reverse the remainders → This is your binary.

**Example:**
```
Decimal: 10  
10 ÷ 2 = 5, remainder 0  
5 ÷ 2 = 2, remainder 1  
2 ÷ 2 = 1, remainder 0  
1 ÷ 2 = 0, remainder 1  
→ Reverse: 1010 (Binary)
```

---

### ✅ 2️⃣ Binary to Decimal Process

**Steps:**
1. Start from the rightmost bit.
2. Multiply each bit by 2^position.
3. Sum all the results.

**Example:**
```
Binary: 1010  
= (1×2³) + (0×2²) + (1×2¹) + (0×2⁰)  
= 8 + 0 + 2 + 0 = 10 (Decimal)
```

---

## 🧠 Bitwise Operators in JavaScript

---

### 1️⃣ & (AND Operator)

Returns 1 if both bits are 1, else 0.

```javascript
let a = 5;    // Binary: 101
let b = 3;    // Binary: 011
console.log(a & b);  // Output: 1 (Binary: 001)
```

---

### 2️⃣ | (OR Operator)

Returns 1 if at least one bit is 1.

```javascript
let a = 5;    // Binary: 101
let b = 3;    // Binary: 011
console.log(a | b);  // Output: 7 (Binary: 111)
```

---

### 3️⃣ ^ (XOR Operator)

Returns 1 when bits are different.

```javascript
let a = 5;    // Binary: 101
let b = 3;    // Binary: 011
console.log(a ^ b);  // Output: 6 (Binary: 110)
```

---

### ✅ Summary

- `&` → Both bits must be 1 to return 1.  
- `|` → At least one bit must be 1 to return 1.  
- `^` → Returns 1 when bits are different.  

---

