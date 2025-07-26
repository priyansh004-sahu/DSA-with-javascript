// 173. Binary Search Tree Iterator




// TreeNode constructor
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// BSTIterator using prototype
var BSTIterator = function(root) {
  this.stack = [];
  this._storeLeftNodes(root);
};

BSTIterator.prototype._storeLeftNodes = function(node) {
  while (node !== null) {
    this.stack.push(node);
    node = node.left;
  }
};

BSTIterator.prototype.next = function() {
  const node = this.stack.pop();
  this._storeLeftNodes(node.right);
  return node.val;
};

BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

// Sample tree:
//       7
//      / \
//     3   15
//         / \
//        9  20
const root = new TreeNode(7,
  new TreeNode(3),
  new TreeNode(15, new TreeNode(9), new TreeNode(20))
);

// Create iterator and print values
const iterator = new BSTIterator(root);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
