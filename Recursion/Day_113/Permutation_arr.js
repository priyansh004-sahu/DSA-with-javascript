
// brute Force Approach

var solve = function(nums, ans, current, isVis, i) {
    if (i == nums.length) {
        ans.push([...current]);
        return;
    }

    for (let j = 0; j < nums.length; j++) {
        if (!isVis[j]) {
            isVis[j] = true;
            current.push(nums[j]);
            solve(nums, ans, current, isVis, i + 1);
            isVis[j] = false;
            current.pop();
        }
    }
}

var permute = function(nums) {
    let ans = [];
    let cur = [];
    let isVis = new Array(nums.length).fill(false);
    solve(nums, ans, cur, isVis, 0);
    return ans;
}

console.log(permute([1, 2, 3]));









//  optimize Approach 


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