function findDisappearedNumbers(nums) {
    let i = 0, n = nums.length;

    // Step 1: Cyclic sort

    while (i < n) {
        let correctIdx = nums[i] - 1;
        if (nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        } else {
            i++;
        }
    }
      // Step 2: Find missing numbers

      let result = [];
      for(var j=0; j<n; j++) {
        if( nums[j] != j + 1){ 
        result.push(j+1);
    }
      }
      return result;
}
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
