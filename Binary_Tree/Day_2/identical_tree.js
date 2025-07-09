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

var isSameTree = function(p, q) {
    if (p === null || q === null) {
        return p === q;
    }

    let isLeftSame = isSameTree(p.left, q.left);
    let isRightSame = isSameTree(p.right, q.right);

    return isLeftSame && isRightSame && p.data === q.data;
};

// Driver code
const preorder1 = [1, 2, -1, -1, 3, 4, -1, -1, 5, -1, -1];
const preorder2 = [1, 2, -1, -1, 3, 4, -1, -1, 5, -1, -1];


idx = -1;
const root1 = buildTree(preorder1);
idx = -1;
const root2 = buildTree(preorder2);

console.log(isSameTree(root1, root2));  // Output: false
