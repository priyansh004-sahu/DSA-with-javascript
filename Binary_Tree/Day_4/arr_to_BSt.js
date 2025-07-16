class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function ArrToBST(nums, st, end) {
    if (st > end) return null;

    let mid = Math.floor(st + (end - st) / 2);

    let root = new Node(nums[mid]);
    root.left = ArrToBST(nums, st, mid - 1);
    root.right = ArrToBST(nums, mid + 1, end);

    return root;
}

var sortedArrayToBST = function(nums) {
    let st = 0, end = nums.length - 1;
    return ArrToBST(nums, st, end);
};

let nums = [-10, -3, 0, 5, 9];
let root = sortedArrayToBST(nums);
console.log(JSON.stringify(root, null, 2));
