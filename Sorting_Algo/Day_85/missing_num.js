function missingNumber(nums) {
    let i = 0;
    while(i < nums.length) {
        let correctIdx = nums[i];
        if(nums[i] < nums.length && nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]]; // swap
        } else {
            i++;
        }  
    }

    for(let j = 0; j < nums.length; j++) {
        if(j !== nums[j]) return j;
    }

    return nums.length;
}

console.log(missingNumber([1, 2, 0])); // Output: 2
