class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let idx = -1;
function buildTree(preorder) {
    idx++;
    if (idx >= preorder.length || preorder[idx] === -1) return null;

    let root = new Node(preorder[idx]);
    root.left = buildTree(preorder);
    root.right = buildTree(preorder);

    return root;
}

let ans = 0;
let height = function(root) {
    if (root == null) return 0;

    let leftHt = height(root.left);
    let rightHt = height(root.right);

    ans = Math.max(ans, leftHt + rightHt);
    return Math.max(leftHt, rightHt) + 1;
};

var diameterOfBinaryTree = function(root) {
    ans = 0; // reset before calculation
    height(root);
    return ans;
};

// Tree structure:
//        1
//       / \
//      2   3
//     / \
//    4   5

const preorder = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, -1];
idx = -1;
const root = buildTree(preorder);

console.log(diameterOfBinaryTree(root));  // ✅ Output: 3
