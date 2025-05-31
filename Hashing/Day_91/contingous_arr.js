/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    // Replace 0 with -1 to use prefix sum technique
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) nums[i] = -1;
    }

    let sum = 0, longestLength = 0;
    const map = new Map();
    map.set(0, -1);  // prefix sum 0 occurs before array starts

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map.has(sum)) {
            // If current prefix sum was seen before,
            // subarray between previous index + 1 and current i has zero sum
            longestLength = Math.max(longestLength, i - map.get(sum));
        } else {
            // Store first occurrence of this prefix sum
            map.set(sum, i);
        }
    }
    return longestLength;
};


console.log(findMaxLength([0,1,1,1,1,1,0,0,0]));
