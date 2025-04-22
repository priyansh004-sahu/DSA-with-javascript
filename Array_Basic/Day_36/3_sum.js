// Brute force approach
function threeSum(nums) {
    let n = nums.length;
    let ans = [];
    let set = new Set(); // to store unique triplets as strings

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let trip = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    let key = trip.join(',');

                    if (!set.has(key)) {
                        set.add(key);
                        ans.push(trip);
                    }
                }
            }
        }
    }

    return ans;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));


// // Better  approach :--> Hashing
function threeSum_2(nums) {
    var n = nums.length;
    let ans = [];
    let uniqueTriplets = new Set();

    for (var i = 0; i < n; i++) {
        var tar = -nums[i];
        let s = new Set();
        for (var j = i + 1; j < n; j++) {
            var third = tar - nums[j];  /// find third value

            if (s.has(third)) {
                let trip = [nums[i], nums[j], third].sort((a, b) => a - b);
                uniqueTriplets.add(trip.toString()); // Convert to string for Set uniqueness
            }
            s.add(nums[j]);
        }
    }

    // Convert Set back to array of number arrays
    ans = Array.from(uniqueTriplets, trip => trip.split(',').map(Number));
    return ans;
}

console.log(threeSum_2([-1, 0, 1, 2, -1, -4]));

// // most optimmal  approach :--> using 2 pointer approach
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Correct sorting for numbers
    let ans = [];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1, k = n - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;

                while (j < k && nums[j] === nums[j - 1]) j++; // Skip duplicates
            }
        }
    }
    return ans;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
