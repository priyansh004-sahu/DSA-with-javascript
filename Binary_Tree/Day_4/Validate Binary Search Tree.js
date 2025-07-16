
// 98. Validate Binary Search Tree

function Helper(root, min, max) {
    if(root == null) return true;

    if(min != null && root.val <= min.val) return false;
    if(max != null && root.val >= max.val) return false;

    return Helper(root.left, min, root) && 
           Helper(root.right, root, max);
}
var isValidBST = function(root) {
    return Helper(root, null, null);
};