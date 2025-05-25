// . Find First and Last Position of Element in Sorted Array

function binarySearch(nums, target, isStart) {
    let st = 0, end = nums.length - 1, ans = -1;
    while(st <= end) {
        let mid = Math.floor((st + end) / 2);
        if(nums[mid] == target) {
            ans = mid;
            if(isStart) end = mid - 1;
            else st = mid + 1;
        }
        else if(nums[mid] < target) {
            st = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return ans;
}
function searchRange(nums, target) {
    let start = binarySearch(nums, target, true);
    let endp = binarySearch(nums, target, false);

    return [start, endp];
};

console.log(searchRange([5,7,7,8,8,10], 8));
