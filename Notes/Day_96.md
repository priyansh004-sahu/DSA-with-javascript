
### ✅ 1. **Node Class**

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
```

#### 🔍 Purpose:

* Represents **each node** in a linked list.
* Has a `val` (data) and `next` (pointer to the next node).

---

### ✅ 2. **LinkedList Class**

```js
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
```

#### 🔍 Purpose:

* `head`: Points to the first node.
* `size`: Tracks the number of nodes.

---

## 🔧 Linked List Operations

---

### ➕ `insertAtFirst(val)`

```js
insertAtFirst(val){
    this.size++;
    const newNode = new Node(val)
    if(this.head === null) {
        this.head = newNode;
        return;
    }
    newNode.next = this.head;
    this.head = newNode;
}
```

#### 🧠 Algorithm:

1. Create a new node.
2. If the list is empty, make `head` point to the new node.
3. Else:

   * Point `newNode.next` to current `head`.
   * Update `head` to `newNode`.
4. Increment size.

#### ✅ Output:

New node becomes the **first node** of the list.

---

### ➕ `inserAtLast(val)`

```js
inserAtLast(val){
    this.size++;
    const newNode = new Node(val)
    if(this.head == null){
        this.head = newNode;
        return;
    }
    let temp = this.head;
    while(temp.next != null){
        temp = temp.next;
    }
    temp.next = newNode;
}
```

#### 🧠 Algorithm:

1. Create a new node.
2. If list is empty, assign to `head`.
3. Else:

   * Traverse the list using `temp` until last node (`temp.next == null`).
   * Assign `temp.next = newNode`.
4. Increment size.

#### ✅ Output:

New node is added **at the end**.

---

### ❌ `deleteAtFirst()`

```js
deleteAtFirst(){
    if(this.head === null){
        console.log("Empty list");
        return;
    }
    this.size--;
    this.head = this.head.next;
}
```

#### 🧠 Algorithm:

1. If list is empty, return.
2. Else:

   * Move `head` to `head.next`.
   * Decrease size.

#### ✅ Output:

Deletes the **first node**.

---

### ❌ `deleteAtLast()`

```js
deleteAtLast(){
    if(this.head === null){
        console.log("empty list");
        return;
    }
    this.size--;
    if(this.head.next == null){
        this.head = null;
        return;
    }
    let temp = this.head;
    while(temp.next.next != null){
        temp = temp.next;
    }
    temp.next = null;
}
```

#### 🧠 Algorithm:

1. If list is empty, return.
2. If only one node:

   * Set `head = null`.
3. Else:

   * Traverse to the **second-last node** (`temp.next.next != null`)
   * Set `temp.next = null`.
4. Decrease size.

#### ✅ Output:

Removes the **last node**.

---

### 🖨️ `printLL()`

```js
printLL(){
    if(this.head === null){
        console.log("empty list");
        return;
    }
    let temp = this.head;
    while(temp != null){
        process.stdout.write(temp.val + "->");
        temp = temp.next;
    }
    console.log("null");
}
```

#### 🧠 Algorithm:

1. If list is empty, return.
2. Else, use `temp` to traverse through nodes.
3. Print each `temp.val` → until null.

---

## ✍️ Example Usage:

```js
let obj = new LinkedList();
obj.insertAtFirst(10)
obj.insertAtFirst(20)
obj.insertAtFirst(30)
obj.insertAtLast(100)
obj.printLL() // Output: 30->20->10->100->null
obj.deleteAtLast()
obj.printLL() // Output: 30->20->10->null
```

---

## ✅ Summary Table:

| Method          | Action                | Time Complexity |
| --------------- | --------------------- | --------------- |
| `insertAtFirst` | Add at beginning      | O(1)            |
| `inserAtLast`   | Add at end            | O(n)            |
| `deleteAtFirst` | Remove from beginning | O(1)            |
| `deleteAtLast`  | Remove from end       | O(n)            |
| `printLL`       | Display full list     | O(n)            |

---

Let me know if you want diagrams, interview questions, or how to convert this to **Doubly Linked List** too.
Displaying Day 96.md.