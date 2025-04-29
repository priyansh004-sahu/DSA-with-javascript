
// Brute Force 
var arr1 = [1, 2, 3, 4], arr2 = [5, 6, 7];
var n1 = arr1.length, n2 = arr2.length;

var ans = new Array(n1 + n2)   // merge array
var i=0, j=0, k=0;

while(i < n1 && j < n2) {
    if(arr1[i] < arr2[j]) {
        ans[k++] = arr1[i++]
    } else {
        ans[k++] = arr2[j++];
    }
}

// check i and j is exust or not

while(i < n1) {
    ans[k++] = arr1[i++]
}

while(j < n2) {
    ans[k++] = arr2[j++]
}
console.log(ans);


// Leetcode --> optimal  without using any new arr


 function merge(nums1, m, nums2, n) {
    var i = m-1;  
    var j = n-1;  
    var k = nums1.length - 1;  
    
    while(i >= 0 && j >= 0) {
        if(nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }
    while(j >= 0) {
        nums1[k--] = nums2[j--]
    }
};

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);  // Output: [1,2,2,3,5,6]

