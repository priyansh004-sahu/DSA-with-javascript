// function longestConsecutive(nums) {
//     if (nums.length === 0) return 0;
//     // Step 1: Sort the array
//     nums.sort((a, b) => a - b);
    
//     let longest = 1;
//     let count = 1;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             continue; // Skip duplicates
//         } else if (nums[i] === nums[i - 1] + 1) {
//             count++; // Consecutive
//         } else {
//             longest = Math.max(longest, count);
//             count = 1; // Reset for new sequence
//         }
//     }

//     return Math.max(longest, count); // Final check
// }

function longestConsecutive(nums) {
    let numSet = new Set(nums);
    let longest = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // Check if it's the start of a sequence
        if (!numSet.has(nums[i] - 1)) {
            let currentNum = nums[i];
            let streak = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }

            // Update longest streak here, inside the if block
            longest = Math.max(longest, streak);
        }
    }
    return longest;
}


console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
