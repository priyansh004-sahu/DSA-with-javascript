
// Brute force approach
function fourSum(nums, target) {
    let n = nums.length;
    let ans = [];
    let set = new Set(); // to store unique triplets as strings

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
               for(let l = k + 1; l < n; l++) {
                if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
                    let trip = [nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a - b);
                    let key = trip.join(',');

                    if (!set.has(key)) {
                        set.add(key);
                        ans.push(trip);
                    }
                }
               }
            }
        }
    }

    return ans;
}
console.log(fourSum([1,0,-1,0,-2,2], 0));




// // most optimmal  approach :--> using 2 pointer approach


function fourSum_2(nums, tar) {
   var n = nums.length;
   let ans = []
 
   nums.sort((a,b) => a-b);

   for(var i=0; i<n; i++) {
    if(i > 0 && nums[i] === nums[i-1]) continue;  // when value same 
      for(var j=i+1; j<n;) {
        var p =j+1, q =n-1;     // it is for third an fourth value

        while(p<q) {
            let sum = nums[i] + nums[j] + nums[p] + nums[q]
            
            if(sum < tar) {
                p++;
            } else if(sum > tar) {
               q--;
            } else {   // sum == tar
                ans.push([nums[i], nums[j], nums[p], nums[q]]);
                p++, q--;
             
                while(p < q && nums[p] == nums[p-1]) p++;   // skip for same value for p
            }       
        }
        j++;
        while(j < n && nums[j] === nums[j-1]) j++;    // skip for same value for j
    }
   }
   return ans;
}
console.log(fourSum_2([1,0,-1,0,-2,2], 0));


