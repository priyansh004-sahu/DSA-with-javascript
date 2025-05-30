
var subarraySum = function(nums, k) {
  let count = 0;
  for(var i=0; i<nums.length; i++) {
     let sum = 0;
     for(var j=i; j<nums.length; j++) {
        sum += nums[j];
        if(sum == k) count++;
     }
  }
  return count;
};
console.log(subarraySum([1,1,1], 2));


// optimal approach
function subArraySum(arr, k) {
   let count  = 0;
   let prefixsum = 0;
   let map = new Map();

   map.set(0,  1);

   for(var i=0; i<arr.length; i++) {
       prefixsum +=  arr[i];

       if(map.has(prefixsum - k)) {
        count += map.get(prefixsum - k);
       }

       map.set( prefixsum, (map.get(prefixsum) || 0) + 1);
   }
   return count;
}

console.log(subArraySum([1, 1, 1], 2));  // Output: 2

