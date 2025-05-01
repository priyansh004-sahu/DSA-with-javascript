
// 283. Move Zeroes

function moveZeroes(nums) {
    let idx = 0;
    for(var i = 0; i<nums.length; i++) {
        if(nums[i] != 0) {
            nums[idx] = nums[i];
            idx++;
        }
    }  
    
    // // Second pass: fill the rest with 0s

    for(var i=idx; i<nums.length; i++) {
       nums[i] = 0;
    }
    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
