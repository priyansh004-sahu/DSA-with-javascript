// maximum subarray  O(n)

var nums = [3, -4, 5, 4, -1, 7, -8];
var n = nums.length;
var currsum = 0, maxsum = 0;

for(var i=0; i < n; i++) {
    currsum += nums[i];
    maxsum = Math.max(currsum, maxsum);
    if(currsum < 0) {
        currsum = 0;
    }
}
console.log("Maximun subarray sum is :- " + maxsum);


//At each position in the array, you ask yourself:

// “Should I continue the previous subarray, or should I start fresh from here?”

// That’s it.