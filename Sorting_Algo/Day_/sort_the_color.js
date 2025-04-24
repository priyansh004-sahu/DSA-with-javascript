var nums = [2, 0, 2, 1, 1, 0];
var n = nums.length;

var count0 = 0;
var count1 = 0;
var count2 = 0;

for (var i = 0; i < n; i++) {
      
     if (nums[i] == 0)  count0++;
     else if (nums[i] == 1)count1++;    
     else  count2++;
}
var idx = 0;

for(var i=0; i<count0; i++) {
    nums[idx++] = 0;
}
for(var i=0; i<count1; i++) {
    nums[idx++] = 1;
}
for(var i=0; i<count2; i++) {
    nums[idx++] = 2;
}

console.log(nums);


// Dutch national falg algorithm
function sortTheColor(nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
}
console.log(sortTheColor([2, 0, 2, 1, 1, 0]));
