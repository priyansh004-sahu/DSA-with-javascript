 function firstMissingPositive(nums) { 
    let i = 0;
    while(i < nums.length) {
        let correctIdx = nums[i]  - 1;
        if(nums[i] > 0 && nums[i ] <= nums.length  && nums[i]  !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]]; // swap
        } else {
            i++;
        }  
    }

    for(let j = 0; j < nums.length; j++) {
        if(nums[j]  !== j + 1) return j+1;
    }

    return nums.length + 1;
    
};
console.log(firstMissingPositive([1, 2, 0])); // Output: 2
