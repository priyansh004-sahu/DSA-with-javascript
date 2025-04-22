// Brute Force
function productExceptSelf(nums) {
    let ans = new Array(nums.length);
    
    for (let i = 0; i < nums.length; i++) {
        let prod = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                prod *= nums[j];
            }
        }
        ans[i] = prod;
    }
    
    return ans;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]

// optimal approach 

function productExceptSelf_1(nums) {
    let n = nums.length;
    let ans = new Array(n);
    let prefix = new Array(n);
    let suffix = new Array(n);

    // Initialize prefix[0] and suffix[n-1]
    prefix[0] = 1;
    suffix[n - 1] = 1;

    // Build prefix
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // Build suffix
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    // Multiply prefix and suffix
    for (let i = 0; i < n; i++) {
        ans[i] = prefix[i] * suffix[i];
    }

    return ans;
}

console.log(productExceptSelf_1([1, 2, 3, 4])); // ✅ Output: [24, 12, 8, 6]


//✅ Space-Optimized Version (O(1) extra space):_2
function productExceptSelf_2(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(1);

    // prefix => ans
    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    let suffix = 1;
    // suffix
    for (let i = n - 2; i >= 0; i--) {
        suffix *= nums[i + 1]; // ith suffix
        ans[i] *= suffix;
    }

    return ans;
}


console.log(productExceptSelf_2([1, 2, 3, 4])); // Output: [24, 12, 8, 6]