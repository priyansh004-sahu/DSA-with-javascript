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

 function subsetsWithDup(nums) {
    var nums = [1, 2, 2];
    nums.sort((a, b) => a - b);  // sort to handle duplicates   
    var allSubsets = [];
    var ans = []
    getAllSubsets(nums, ans, 0, allSubsets);
    console.log(allSubsets);
};

subsetsWithDup();