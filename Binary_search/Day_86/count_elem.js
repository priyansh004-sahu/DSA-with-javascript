function countOccurrences(nums, target) {
    const first = findIndex(nums, target, true);
    if (first === -1) return 0; // not found

    const last = findIndex(nums, target, false);
    return last - first + 1;
}

function findIndex(nums, target, findFirst) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            index = mid;
            if (findFirst) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return index;
}
// Example
const nums = [1, 2, 2, 2, 3, 4, 5];
console.log(countOccurrences(nums, 2));  // Output: 3
