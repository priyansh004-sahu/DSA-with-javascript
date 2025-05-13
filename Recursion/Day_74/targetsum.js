function find(arr, index, n, target) {
    if (target === 0) return true;
    if (index === n || target < 0) return false;

    // Exclude or include current element
    return find(arr, index + 1, n, target) ||
           find(arr, index + 1, n, target - arr[index]);
}

function main() {
    const arr = [2, 4, 1, 8, 7];
    const target = 13;
    const n = arr.length;

    console.log(find(arr, 0, n, target));  // Output: true or false
}

main();
