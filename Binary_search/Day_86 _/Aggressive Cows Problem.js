function isPossible(arr, N, C, MinAllowedDis) {
    let cows = 1, LastStallPos = arr[0];

    for (let i = 1; i < N; i++) {
        if (arr[i] - LastStallPos >= MinAllowedDis) {
            cows++;
            LastStallPos = arr[i];
        }
        if (cows === C) {
            return true;
        }
    }
    return false;
}

function AggressiveCows(arr, N, C) {
    arr.sort((a, b) => a - b);

    let st = 1, end = arr[N - 1] - arr[0], ans = -1;

    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2);

        if (isPossible(arr, N, C, mid)) {
            ans = mid;
            st = mid + 1;  // Try for a larger distance
        } else {
            end = mid - 1;  // Try for a smaller distance
        }
    }
    return ans;
}

console.log(AggressiveCows([1, 2, 8, 4, 9], 5, 3));  // Output should be 3
