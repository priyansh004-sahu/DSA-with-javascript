var combinationSum = function(candidates, target) {
    const ans = [];
    const combin = [];
    const set = new Set();  // To avoid duplicate combinations

    const getAllCombination = (arr, idx, tar, combin) => {
        const n = arr.length;

        if (idx === n || tar < 0) return;

        if (tar === 0) {
            const key = [...combin].sort((a, b) => a - b).join(',');
            if (!set.has(key)) {
                ans.push([...combin]);
                set.add(key);
            }
            return;
        }

        // Include current element once
        combin.push(arr[idx]);
        getAllCombination(arr, idx + 1, tar - arr[idx], combin);

        // Include current element multiple times
        getAllCombination(arr, idx, tar - arr[idx], combin);

        // Backtrack
        combin.pop();

        // Exclude current element
        getAllCombination(arr, idx + 1, tar, combin);
    };

    getAllCombination(candidates, 0, target, combin);
    return ans;
};

// Example usage:
console.log(combinationSum([2, 3, 6, 7], 7));
