// #include <iostream>
// #include <vector>
// using namespace std;

// // Define the Node structure
// struct Node {
//     int data;
//     Node* left;
//     Node* right;

//     Node(int val) {
//         data = val;
//         left = right = nullptr;
//     }
// };

// // Helper function to find predecessor and successor
// Node* rightMostInLeftSubtree(Node* root) {
//     Node* ans;

//     while(root != NULL) {
//         ans =root;
//         root = root-> right;
//     }
//     return ans;
// }

// Node* leftMostInRightSubtree(Node* root){
//     Node* ans;

//     while(root != NULL) {
//         ans = root;
//         root = root-> left;
//     }
//     return ans;
// }
// // Find predecessor and successor in BST
// vector<int> getPredSucc(Node* root, int key) {
//      Node* curr = root;
//     Node* pred = NULL;
//     Node* succ = NULL;

//     while (curr != NULL) {
//         if (key < curr->data) {
//             succ = curr;               // Possible successor
//             curr = curr->left;
//         } else if (key > curr->data) {
//             pred = curr;               // Possible predecessor
//             curr = curr->right;
//         } else {
//             // Node with key found
//             // Find inorder predecessor (max value in left subtree)
//             if (curr->left != NULL) {
//                pred = rightMostInLeftSubtree(curr->left);
//             }

//             // Find inorder successor (min value in right subtree)
//             if (curr->right != NULL) {
//                  succ = leftMostInRightSubtree(curr->right);
//             }
//             break;
//         }
//     }

//     return {pred->data, succ->data};
// }

// int main() {
//     Node* root = new Node(6);
//     root->left = new Node(4);
//     root->right = new Node(8);
//     root->left->left = new Node(1);
//     root->left->right = new Node(5);
//     root->right->left = new Node(7);
//     root->right->right = new Node(9);

//     int key = 7;
//     vector<int> ans = getPredSucc(root, key);

//     cout << "Predecessor: " << ans[0] << endl;
//     cout << "Successor: " << ans[1] << endl;

//     return 0;
// }




































class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

// Helper to find the rightmost node in the left subtree
function rightMostInLeftSubtree(root) {
  let ans = null;
  while (root !== null) {
    ans = root;
    root = root.right;
  }
  return ans;
}

// Helper to find the leftmost node in the right subtree
function leftMostInRightSubtree(root) {
  let ans = null;
  while (root !== null) {
    ans = root;
    root = root.left;
  }
  return ans;
}

// Main function to get predecessor and successor
function getPredSucc(root, key) {
  let curr = root;
  let pred = null;
  let succ = null;

  while (curr !== null) {
    if (key < curr.data) {
      succ = curr; // possible successor
      curr = curr.left;
    } else if (key > curr.data) {
      pred = curr; // possible predecessor
      curr = curr.right;
    } else {
      // Key found
      if (curr.left !== null) {
        pred = rightMostInLeftSubtree(curr.left);
      }
      if (curr.right !== null) {
        succ = leftMostInRightSubtree(curr.right);
      }
      break;
    }
  }

  return [pred?.data ?? null, succ?.data ?? null];
}

// Build the BST
let root = new Node(6);
root.left = new Node(4);
root.right = new Node(8);
root.left.left = new Node(1);
root.left.right = new Node(5);
root.right.left = new Node(7);
root.right.right = new Node(9);

// Test
let key = 7;
let [pred, succ] = getPredSucc(root, key);

console.log("Predecessor:", pred);
console.log("Successor:", succ);
