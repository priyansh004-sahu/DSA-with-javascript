function getAllSubsets(nums, ans, i, allSubsets) {
    if (i === nums.length) {
        allSubsets.push([...ans]);  // copy the subset
        return;
    }

    // Include nums[i]
    ans.push(nums[i]);
    getAllSubsets(nums, ans, i + 1, allSubsets);
    ans.pop();

    // Skip duplicates
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
        i++;
    }

    // Exclude nums[i]
    getAllSubsets(nums, ans, i + 1, allSubsets);
}

var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);  // sort to handle duplicates
    var allSubsets = [];
    getAllSubsets(nums, [], 0, allSubsets);
    return allSubsets;
};
