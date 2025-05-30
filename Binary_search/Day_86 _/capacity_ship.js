// 1011. Capacity To Ship Packages Within D Days

/**
 * Helper function to check if we can ship all packages within 'days'
 * given a specific ship capacity.
 */
function youCanShip(weight, days, capacity) {
    let d = 1; // Start with 1 day
    let total = 0; // Current day's load

    for (let i = 0; i < weight.length; i++) {
        // If adding the current package exceeds capacity, ship on next day
        if (weight[i] + total > capacity) {
            d++; // Need one more day
            total = weight[i]; // Start new day with current package
        } else {
            total += weight[i]; // Otherwise, keep adding to current day's load
        }
    }

    // Return true if we can ship within given days
    return d <= days;
}

/**
 * Main function to find the minimum ship capacity
 * required to ship all packages within 'days' days.
 */
var shipWithinDays = function(weights, days) {
    // Minimum possible capacity: max weight (can’t split packages)
    let st = Math.max(...weights);
    
    // Maximum possible capacity: sum of all weights (all in one day)
    let end = weights.reduce((a, b) => a + b, 0);
    
    let ans = end; // Store the minimum valid capacity

    // Binary search over the capacity range
    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2); // Mid capacity to try

        // Check if we can ship with this capacity
        if (youCanShip(weights, days, mid)) {
            ans = mid;         // Mid is a valid capacity, try to find smaller
            end = mid - 1;     // So we search in the left half
        } else {
            st = mid + 1;      // Mid too small, search in right half
        }
    }

    return ans; // This is the smallest capacity that works
};



console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5));  // Output: 15
