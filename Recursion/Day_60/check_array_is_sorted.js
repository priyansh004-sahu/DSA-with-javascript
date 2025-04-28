
// check array if is sorted
console.log(" ");

function sortedCheck(arr, n) {
    if(n == 0 || n == 1) return true;
    return arr[n-1] >= arr[n-2] && sortedCheck(arr, n-1)
  }
  
  var arr = [1, 2, 3, 4, 5];
  var n = arr.length;
  console.log(sortedCheck(arr, n));
  
// binary seacrch
  function binarySearch(nums, target, st, end) {
    if (st <= end) {
        var mid = Math.floor(st + (end - st) / 2);
        if (nums[mid] == target) return mid;

        else if (nums[mid] < target) {
            return binarySearch(nums, target, mid + 1, end);
        }
        else {
            return binarySearch(nums, target, st, mid - 1);
        }
    }
    return -1;
};

var nums = [-1, 0, 3, 5, 9, 12];
var target = 3;
console.log(binarySearch(nums, target, 0, nums.length - 1));
