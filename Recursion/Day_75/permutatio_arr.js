
function Permutation(nums, idx, ans) {
  if(idx == nums.length) {
    ans.push([...nums])
    return;
  }

  for(var i=idx; i < nums.length; i++) {
     [nums[idx], nums[i]] = [nums[i], nums[idx]];
     Permutation(nums, idx + 1, ans);
     
     // Backtraking step
     [nums[idx], nums[i]] = [nums[i], nums[idx]];

  }
}

function permute(nums) {
  let ans = []
  Permutation(nums, 0, ans);
  console.log(ans);
  
};
permute([1, 2, 3])