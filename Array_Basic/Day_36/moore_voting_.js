function  majorityElemen(nums) {
    let freq = 0, ans = 0;

    // Finding candidate
    for (let i = 0; i < nums.length; i++) {
        if (freq === 0) {
            ans = nums[i];
        }
        if(ans === nums[i]) {
            freq++;
        } else {
            freq--;
        }
    }

    // Verifying candidate
    let count = 0;
    for (let num of nums) {
        if (num === ans) {
            count++;
        }
    }

    return count > Math.floor(nums.length / 2) ? ans : -1;
};

// Example usage:
console.log( majorityElemen([3, 3, 4, 2, 3, 3, 3])); // Output: 3
console.log( majorityElemen([1, 2, 3, 4])); // Output: -1 (No majority element)
