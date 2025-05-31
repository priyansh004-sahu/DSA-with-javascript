
* **Q109. 525. Contiguous Array**
* **Q110. 128. Longest Consecutive Sequence**
* **Q111. Count distinct elements in every window**

---

### ✅ Q109. [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/)

📌 **Goal:** Find the maximum length of a contiguous subarray with equal number of 0 and 1.

#### ✅ Approach: Running Sum + Hash Map

```js
var findMaxLength = function(nums) {
    let map = new Map();
    map.set(0, -1); // sum 0 at index -1
    let maxLen = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;

        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }

    return maxLen;
};
```

🧠 **Algorithm:**

1. Convert 0 → -1 to reduce the problem to finding subarrays with sum = 0.
2. Use a hash map to store first occurrence of each `sum`.
3. If same `sum` reappears, it means the elements in between sum to 0.
4. Track the maximum length of such subarrays.

🕒 Time Complexity: `O(n)`

---

### ✅ Q110. [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

📌 **Goal:** Find the length of the longest sequence of consecutive integers.

#### ✅ Approach: Using Set

```js
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) { // start of sequence
            let currentNum = num;
            let streak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }

            longest = Math.max(longest, streak);
        }
    }

    return longest;
};
```

🧠 **Algorithm:**

1. Store all numbers in a Set to allow `O(1)` lookup.
2. For each number, only begin counting if it’s the start of a sequence (i.e., `num - 1` is not present).
3. Count consecutive numbers by checking if `num + 1`, `num + 2`, etc. exist.
4. Keep track of the maximum sequence length.

🕒 Time Complexity: `O(n)`

---

Certainly! Here's the **updated solution** for:

---

### ✅ **Q111. Count Distinct Elements in Every Window (Updated Version)**

🔄 **Modification:**

* First, build the initial frequency map for the **first `k` elements**
* Then slide the window from index `k` to `n - 1`

---

```js
function countDistinctInWindow(arr, k) {
    const result = [];
    const freqMap = new Map();

    // Step 1: Pre-process first window (0 to k - 1)
    for (let i = 0; i < k; i++) {
        freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
    }
    result.push(freqMap.size); // First window result

    // Step 2: Slide the window from index k to end
    for (let i = k; i < arr.length; i++) {
        // Remove the element going out of the window
        let outElem = arr[i - k];
        if (freqMap.get(outElem) === 1) {
            freqMap.delete(outElem);
        } else {
            freqMap.set(outElem, freqMap.get(outElem) - 1);
        }

        // Add the new element entering the window
        freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);

        // Store result for current window
        result.push(freqMap.size);
    }

    return result;
}
```

---

### 🧠 **Step-by-Step Algorithm:**

1. **Initialize** an empty Map to store frequencies.
2. **Traverse the first `k` elements** (from index `0` to `k - 1`) and build the initial frequency map.
3. **Push the size** of the map (number of distinct elements) to the result.
4. For **each index `i` from `k` to `n - 1`:**

   * Remove the frequency of element at `i - k`.
   * Add/update the frequency of current element `arr[i]`.
   * Push `map.size` into result.
5. Return the result array.

---

### ✅ Example:

```js
console.log(countDistinctInWindow([1, 2, 1, 3, 4, 2, 3], 4));
// Output: [3, 4, 4, 3]
```
Displaying Day 91.md.