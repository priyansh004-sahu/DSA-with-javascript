// Q111. Count Distinct Elements in Every Window (Updated Version)

function countDistinctInWindow(arr, k) {
    const result = [];
    const freqMap = new Map();

    // Step 1: Pre-process first window (0 to k - 1)
    for (let i = 0; i < k; i++) {
        freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
    }
    result.push(freqMap.size); // First window result

    // Step 2: Slide the window from index k to end
    for (let i = k; i < arr.length; i++) {
        // Remove the element going out of the window
        let outElem = arr[i - k];
        if (freqMap.get(outElem) === 1) {
            freqMap.delete(outElem);
        } else {
            freqMap.set(outElem, freqMap.get(outElem) - 1);
        }

        // Add the new element entering the window
        freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);

        // Store result for current window
        result.push(freqMap.size);
    }

    return result;
}
console.log(countDistinctInWindow([1, 2, 1, 3, 4, 2, 3], 4))
