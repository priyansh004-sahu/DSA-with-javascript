
function intersection(nums1, nums2) {
    let set = new Set(nums1);
    let ans = [];

    for(var i=0; i < nums2.length; i++) {
        if(set.has(nums2[i]) && !ans.includes(nums2[i])) {
            ans.push(nums2[i]);
        }
    }
    return ans;
};
console.log(intersection([1,2,2,1], [2,2]));
