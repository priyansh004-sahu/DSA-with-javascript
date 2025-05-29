// 1011. Capacity To Ship Packages Within D Days

function isValid(weights, D, Capacity) {
    let days = 1, total = 0;

    for (let i = 0; i < weights.length; i++) {
        if (total + weights[i] > Capacity) {
            days++;
            total = weights[i];
        } else {
            total += weights[i];
        }
    }
    return days <= D;
}

function shipWithinDays(weights, days) {
    let st = Math.max(...weights);
    let end = weights.reduce((a, b) => a + b, 0);
    let result = end;

    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2);

        if (isValid(weights, days, mid)) {
            result = mid;
            end = mid - 1;
        } else {
            st = mid + 1;
        }
    }
    return result;
};



console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5));  // Output: 15
