//  144 leetcode :- Flatten Binary Tree to Linked List  
//implement preorder in reverse order

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var flatten = function (root) {
  let nextRight = null;

  function helper(node) {
    if (node == null) return;
    helper(node.right);
    helper(node.left);
    node.left = null;
    node.right = nextRight;
    nextRight = node;
  }

  helper(root);
};

// Helper function to print flattened tree
function printRightLinkedList(root) {
  let curr = root;
  while (curr !== null) {
    process.stdout.write(curr.val + " -> ");
    curr = curr.right;
  }
  console.log("null");
}

// Example binary tree:
//       1
//      / \
//     2   5
//    / \   \
//   3   4   6

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.right = new Node(6);

// Flatten the tree
flatten(root);

// Print the flattened tree
printRightLinkedList(root);
