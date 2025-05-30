//  Longest Sub-Array with Sum K

function longestSubarrayWithSumK(nums, k) {
    let map = new Map();
    let sum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === k) {
            maxLength = i + 1;
        }

        if (map.has(sum - k)) {
            maxLength = Math.max(maxLength, i - map.get(sum - k));
        }

         if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLength;
}
console.log(longestSubarrayWithSumK([10, 5, 2, 7, 1, -10], 15));
