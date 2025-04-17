// brute Force approach

function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return -1;
};
console.log(twoSum([2,7,11,15], 3));



// optimized approach using map

function twoSum(nums, target) {

    let map = new Map();
    let ans = [-1, -1];
    for (var i = 0; i < nums.length; i++) {
        
        if(map.has(target - nums[i])) {
            ans[0] = i;
            ans[1] = map.get(target - nums[i]);
            // return [map.get(target - nums[i]), i]; // earlier index first for [0,1]
            return ans
        } 
        else {
             map.set(nums[i], i)
        }
    }
    return ;
};
console.log(twoSum([2,7,11,15,2,7], 9));