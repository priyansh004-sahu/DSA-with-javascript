
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

for(var j=0; j < k; j++) {

    var copy = nums[nums.length-1];

   for(var i=nums.length-1; i > 0; i--) {
      nums[i] = nums[i-1];       
   }
   nums[0] = copy;
}
console.log(nums);


// most optimized

var rotate = function(nums, k) {
    var n = nums.length;
    k = k % n; // In case k is larger than the length of the array

    reverse(nums, 0, n - k - 1);
    reverse(nums, n - k, n - 1);
    reverse(nums, 0, n - 1);

    function reverse(nums, i, j) {
        while (i < j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
};

// Test the rotate function
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
rotate(nums, k);
console.log(nums);  // Should output: [5, 6, 7, 1, 2, 3, 4]
