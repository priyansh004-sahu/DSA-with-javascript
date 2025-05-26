function countOccurrences(arr, x) {
  function binarySearch(isFirst) {
    let low = 0, high = arr.length - 1, result = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === x) {
        result = mid;
        isFirst ? high = mid - 1 : low = mid + 1;
      } else if (arr[mid] > x) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return result;
  }

  const first = binarySearch(true);
  if (first === -1) return 0; // element not found
  const last = binarySearch(false);
  return last - first + 1;
}

// Example
const arr = [1, 2, 2, 2, 3, 4, 5];
console.log(countOccurrences(arr, 2));  // Output: 3
