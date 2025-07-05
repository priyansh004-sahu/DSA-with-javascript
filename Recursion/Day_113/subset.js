function getAllSubsets(arr, ans, i, AllSubsets) {
    if (i === arr.length) {
        AllSubsets.push([...ans]);
        return;
    }

    // Include the current element
    ans.push(arr[i]);
    getAllSubsets(arr, ans, i + 1, AllSubsets);

    // Exclude the current element
    ans.pop();
    getAllSubsets(arr, ans, i + 1, AllSubsets);
}

function subsets(arr) {
    let ans = [];
    let Allsubset = [];

    getAllSubsets(arr, ans, 0, Allsubset);
    return Allsubset;  // ✅ Return the final result
}

console.log(subsets([1, 2, 3]));
