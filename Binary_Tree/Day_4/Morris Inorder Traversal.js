class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let idx = -1;

// Build tree from preorder traversal with -1 as NULL marker
function buildTree(preorder) {
    idx++;
    if (idx >= preorder.length || preorder[idx] === -1) {
        return null;
    }

    let root = new Node(preorder[idx]);
    root.left = buildTree(preorder);
    root.right = buildTree(preorder);

    return root;
}



// 94. Binary Tree Inorder Traversal  :- leetcode
var inorderTraversal = function(root) {
    let ans = [];
    let curr = root;

    while (curr != null) {
        if (curr.left == null) {
            ans.push(curr.data);
            curr = curr.right;
        } else {
            let IP = curr.left;
            while (IP.right != null && IP.right != curr) {
                IP = IP.right;
            }

            if (IP.right == null) {
                IP.right = curr;   // create temporary thread
                curr = curr.left;
            } else {
                IP.right = null;   // remove thread
                ans.push(curr.data);
                curr = curr.right;
            }
        }
    }

    return ans;
};


// ✅ Main
let preorder = [1, 2, 3, 4, -1, -1, 5, -1, -1, 6, -1, 7, 8, -1, -1, -1, -1];
idx = -1;
let root = buildTree(preorder);

console.log(inorderTraversal(root)); 
// Expected output: [4,3,5,2,1,6,8,7]
