
### ✅ Q106. [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)

#### ✅ Approach 1: Generic (Using Nested Loops)

```js
var intersection = function(nums1, nums2) {
    let result = [];
    for(let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
            result.push(nums1[i]);
        }
    }
    return result;
};
```

🔹 **Algorithm:**

1. Iterate through each element of `nums1`.
2. For each element, check if it is present in `nums2`.
3. If yes and not already in the result, add it to `result`.

🧠 Time Complexity: O(n \* m)

---

#### ✅ Approach 2: Using Sets

```js
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = [];

    for (let val of set1) {
        if (set2.has(val)) {
            result.push(val);
        }
    }

    return result;
};
```

🔹 **Algorithm:**

1. Convert both arrays into sets to remove duplicates.
2. Loop through one set and check if the other set contains the value.
3. If yes, add it to result.

🧠 Time Complexity: O(n + m)

---

### ✅ Q107. [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

#### ✅ Brute Force Approach

```js
var subarraySum = function(nums, k) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) count++;
        }
    }
    return count;
};
```

🔹 **Algorithm:**

1. Try all possible subarrays.
2. Keep calculating the sum and compare with `k`.
3. Increment count if a match is found.

🧠 Time Complexity: O(n²)

---

#### ✅ Optimized: Running Sum + Map

```js
var subarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, 1);
    let sum = 0, count = 0;

    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};
```

🔹 **Algorithm:**

1. Maintain cumulative sum.
2. Use a Map to store how many times a sum has occurred.
3. At each step, check if `sum - k` exists in Map → means a subarray with sum `k` exists.

🧠 Time Complexity: O(n)

---

### ✅ Q108. Longest Sub-Array with Sum K

#### ✅ Optimized: Running Sum + Map

```js
function longestSubarrayWithSumK(nums, k) {
    let map = new Map();
    let sum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === k) {
            maxLength = i + 1;
        }

        if (!map.has(sum)) {
            map.set(sum, i);
        }

        if (map.has(sum - k)) {
            maxLength = Math.max(maxLength, i - map.get(sum - k));
        }
    }

    return maxLength;
}
```

🔹 **Algorithm:**

1. Keep a running sum of elements.
2. If `sum === k`, we found a subarray from start.
3. Otherwise, if `sum - k` is in map, then subarray from `map.get(sum - k) + 1` to `i` has sum `k`.
4. Track the maximum length.

🧠 Time Complexity: O(n)
Displaying Day 90.md.