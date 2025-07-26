
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function largestBST(root) {
    function helper(node) {
        if (!node) {
            return {
                isBST: true,
                size: 0,
                min: Infinity,
                max: -Infinity,
                maxSize: 0
            };
        }

        const left = helper(node.left);
        const right = helper(node.right);

        const current = {};

        if (
            left.isBST &&
            right.isBST &&
            node.data > left.max &&
            node.data < right.min
        ) {
            current.isBST = true;
            current.size = left.size + right.size + 1;
            current.min = Math.min(left.min, node.data);
            current.max = Math.max(right.max, node.data);
            current.maxSize = current.size;
        } else {
            current.isBST = false;
            current.size = 0;  // invalid BST here
            current.maxSize = Math.max(left.maxSize, right.maxSize);
        }

        return current;
    }

    return helper(root).maxSize;
}
//        10
//       /  \
//      5   15
//     / \    \
//    1   8    7

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(1);
root.left.right = new Node(8);
root.right.right = new Node(7);

console.log("Largest BST size:", largestBST(root)); // Output: 3
