
function removeDuplicates(nums) {
    let j = 1;
    for(var i=0; i<nums.length; i++) {
        if(nums[i] != nums[i+1]) {
            nums[j] = nums[i+1];
            j++;
        }
    }
    return nums;  
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1; // Pointer for placing unique elements
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[j] = nums[i + 1]; // Place the next unique element
            j++;
        }
    }
    return j; // Return the number of unique elements
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
