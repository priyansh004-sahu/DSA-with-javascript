/*  
🔍 Approach: Sliding Window Technique
Why sliding window?

All numbers are positive, so once a window’s sum exceeds the target, increasing the window won’t help — it’ll only make the sum larger.

That allows us to shrink the window from the left as long as the sum is still ≥ target.

 */



var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    let sum = 0, total = Infinity;
    let start = 0, end = 0;

    while (end < n) {
        sum += nums[end];

            //window length decrease kar sakte ha
        while (sum >= target) {
            total = Math.min(total, end - start + 1); // ✅ just update, don't add
            sum -= nums[start++];
        }
          // window length increse
        end++;
    }
    return total === Infinity ? 0 : total;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
