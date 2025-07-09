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
  if (preorder[idx] === -1) return null;

  const root = new Node(preorder[idx]);
  root.left = buildTree(preorder);
  root.right = buildTree(preorder);

  return root;
}

// Preorder Traversal
function preOrder(root) {
  if (root === null) return;
  process.stdout.write(root.data + ' ');
  preOrder(root.left);
  preOrder(root.right);
}

// Inorder Traversal
function inOrder(root) {
  if (root === null) return;
  inOrder(root.left);
  process.stdout.write(root.data + ' ');
  inOrder(root.right);
}

// Postorder Traversal
function postOrder(root) {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  process.stdout.write(root.data + ' ');
}

// Level Order Traversal
function levelOrder(root) {
  if (!root) return;
  const q = [root];

  while (q.length > 0) {
    const curr = q.shift();
    process.stdout.write(curr.data + ' ');

    if (curr.left !== null) q.push(curr.left);
    if (curr.right !== null) q.push(curr.right);
  }
  console.log();
}

// Level-wise Order Traversal
function printLevelOrder(root) {
  if (!root) return;
  const q = [root, null];

  while (q.length > 0) {
    const curr = q.shift();

    if (curr === null) {
      console.log();
      if (q.length > 0) q.push(null);
      continue;
    }

    process.stdout.write(curr.data + ' ');
    if (curr.left !== null) q.push(curr.left);
    if (curr.right !== null) q.push(curr.right);
  }
}

// MAIN
const preorder = [1, 2, -1, -1, 3, 4, -1, -1, 5, -1, -1];
const root = buildTree(preorder);

preOrder(root);     // Preorder
console.log();
inOrder(root);      // Inorder
console.log();
postOrder(root);    // Postorder
console.log();
levelOrder(root);   // Level Order
printLevelOrder(root); // Level-wise Level Order
