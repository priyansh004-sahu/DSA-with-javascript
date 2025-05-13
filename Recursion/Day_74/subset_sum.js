function getSubsetSum(arr, i, sum, allSums) {
    if (i === arr.length) {
        allSums.push(sum);
        return;
    }

    // Include current element in sum
    getSubsetSum(arr, i + 1, sum + arr[i], allSums);

    // Exclude current element
    getSubsetSum(arr, i + 1, sum, allSums);
}

function subsetSum(arr) {
    let allSums = [];
    getSubsetSum(arr, 0, 0, allSums);
    console.log(allSums);
}

subsetSum([1, 2, 3]);
