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

function isIdentical(p, q) {
    if (p === null || q === null) {
        return p === q;
    }

    return (
        p.data === q.data &&
        isIdentical(p.left, q.left) &&
        isIdentical(p.right, q.right)
    );
}

var isSubtree = function(root, subRoot) {
    if (root === null || subRoot === null) {
        return root === subRoot;
    }

    if (root.data === subRoot.data && isIdentical(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// Driver code
// Tree:     3
//         /   \
//        4     5
//       / \
//      1   2

// SubTree:   4
//           / \
//          1   2

const preorder1 = [3, 4, 1, -1, -1, 2, -1, -1, 5, -1, -1];
const preorder2 = [4, 1, -1, -1, 2, -1, -1];

idx = -1;
const root = buildTree(preorder1);
idx = -1;
const subRoot = buildTree(preorder2);

console.log(isSubtree(root, subRoot));  // ✅ Output: true
