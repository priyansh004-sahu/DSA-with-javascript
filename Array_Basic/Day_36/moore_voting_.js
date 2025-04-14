function findMajorityElement(nums) {
    let candidate = null, count = 0;

    // Step 1: Find the candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Step 2: Verify the candidate
    count = 0;
    for (let num of nums) {
        if (num === candidate) count++;
    }

    return count > Math.floor(nums.length / 2) ? candidate : -1;
}

// Example usage:
console.log(findMajorityElement([3, 3, 4, 2, 3, 3, 3])); // Output: 3
console.log(findMajorityElement([1, 2, 3, 4])); // Output: -1 (No majority element)
