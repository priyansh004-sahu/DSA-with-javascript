function search(arr, target) {
    let st = 0, end = arr.length - 1;

    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        // Check if left half is sorted
        if (arr[st] <= arr[mid]) {
            if (arr[st] <= target && target <= arr[mid]) {
                end = mid - 1;
            } else {
                st = mid + 1;
            }
        } 
        // Right half is sorted
        else {
            if (arr[mid] <= target && target <= arr[end]) {
                st = mid + 1;   // <-- FIXED: should be mid + 1, not mid - 1
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
}

console.log(search([4,5,6,7,0,1,2], 0)); // Output: 4
