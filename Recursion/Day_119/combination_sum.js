function getAllCombination(arr, idx, tar, combin, ans, set){
    let n = arr.length;

    if (tar < 0 || idx === n) return;

    if (tar === 0) {
        const key = [...combin].sort((a, b) => a - b).join(',');
        if (!set.has(key)) {
            ans.push([...combin]);
            set.add(key);
        }
        return;
    }

    // Include current element (can be reused)
    combin.push(arr[idx]);
    getAllCombination(arr, idx, tar - arr[idx], combin, ans, set);
    combin.pop();

    // Exclude current element
    getAllCombination(arr, idx + 1, tar, combin, ans, set);
};

var combinationSum = function(candidates, target) {
    let ans = [];
    let combin = [];
    let set = new Set();

    getAllCombination(candidates, 0, target, combin, ans, set);
    return ans;
};

// Example usage:
console.log(combinationSum([2, 3, 6, 7], 7));
