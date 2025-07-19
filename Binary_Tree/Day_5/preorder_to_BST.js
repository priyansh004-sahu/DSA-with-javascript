function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function helper(preorder, bound, i) {
    if (i.i >= preorder.length || preorder[i.i] > bound) return null;

    let root = new TreeNode(preorder[i.i++]);
    root.left = helper(preorder, root.val, i);
    root.right = helper(preorder, bound, i);

    return root;
}

function bstFromPreorder(preorder) {
    let i = { i: 0 };
    return helper(preorder, Infinity, i);
}

// ✅ Level-order traversal to get output as array:
function treeToArray(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // Optional: Trim trailing nulls to match expected output format
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

// ✅ Example usage:
let preorder = [8, 5, 1, 7, 10, 12];
let bstRoot = bstFromPreorder(preorder);
console.log(treeToArray(bstRoot)); // Output: [8,5,10,1,7,null,12]
