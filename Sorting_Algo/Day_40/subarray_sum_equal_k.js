
function subArray(nums, k) {
      let n = nums.length;
      let count = 0;

      for(var i=0; i<n; i++) {
        let sum = 0;
        for(var j=i; j<n; j++) {
           sum += nums[j];
           if(sum == k) count++;
        }
      }
      return count;
}
console.log(subArray([1,1,1], 2));


// optimal approach
function subArraySum(arr, k) {
    let n = arr.length;
    let count = 0;
    let prefixSum = 0;
    let m = new Map();  // ps -> freq

    m.set(0, 1);  // For subarrays starting from index 0

    for (let i = 0; i < n; i++) {
        prefixSum += arr[i];

        if (m.has(prefixSum - k)) {
            count += m.get(prefixSum - k);
        }

        m.set(prefixSum, (m.get(prefixSum) || 0) + 1);  // update in the set
    }

    return count;
}

console.log(subArraySum([1, 1, 1], 2));  // Output: 2

