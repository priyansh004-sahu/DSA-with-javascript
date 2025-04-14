# Time and Space Complexity Guide

## 1. Introduction
Time and space complexity are fundamental concepts in computer science that describe the efficiency of an algorithm in terms of execution time and memory usage, respectively.

---

## 2. Time Complexity
### 2.1 Definition
Time complexity represents the amount of time an algorithm takes to execute as a function of the input size `n`.

### 2.2 Common Time Complexities

| Notation   | Complexity Name       | Example Algorithm         |
|------------|----------------------|---------------------------|
| **O(1)**   | Constant Time        | Accessing an array element |
| **O(log n)** | Logarithmic Time  | Binary Search              |
| **O(n)**   | Linear Time          | Linear Search              |
| **O(n log n)** | Linearithmic Time | Merge Sort, Quick Sort (avg case) |
| **O(n^2)**  | Quadratic Time      | Bubble Sort, Selection Sort |
| **O(n^3)**  | Cubic Time          | Matrix Multiplication      |
| **O(2^n)**  | Exponential Time    | Recursive Fibonacci        |
| **O(n!)**   | Factorial Time      | Traveling Salesman Problem |

### 2.3 Asymptotic Notations
- **Big-O (O)**: Upper bound (worst case)
- **Big-Omega (Ω)**: Lower bound (best case)
- **Big-Theta (Θ)**: Tight bound (average case)

### 2.4 Best, Worst, and Average Case Analysis
- **Best Case**: The input is optimal and results in the least operations.
- **Worst Case**: The input requires the maximum number of operations.
- **Average Case**: The expected time complexity for a random input.

### 2.5 Master Theorem for Recurrence Relations
Used to analyze divide-and-conquer algorithms:
```
T(n) = aT(n/b) + O(n^d)
```
Cases:
1. If `d > log_b(a)`, then `T(n) = O(n^d)`
2. If `d = log_b(a)`, then `T(n) = O(n^d log n)`
3. If `d < log_b(a)`, then `T(n) = O(n^log_b(a))`

---

## 3. Space Complexity
### 3.1 Definition
Space complexity measures the total memory an algorithm requires in terms of input size `n`.

### 3.2 Components of Space Complexity
1. **Fixed Part**: Memory required by constants, variables, and program code.
2. **Variable Part**: Memory required by dynamic allocations, function calls, etc.

### 3.3 Common Space Complexities
- **O(1)**: Constant space (e.g., swapping two variables)
- **O(n)**: Linear space (e.g., storing an array)
- **O(n^2)**: Quadratic space (e.g., adjacency matrix for a graph)

### 3.4 Recursive Function Space Complexity
- Each recursive call adds a new stack frame, so recursion depth affects space complexity.
- Example:
  ```c
  int fibonacci(int n) {
      if (n <= 1) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
  ```
  - Time Complexity: **O(2^n)**
  - Space Complexity: **O(n)** (due to recursion depth)

---

## 4. Optimizing Time and Space Complexity
### 4.1 Time Optimization Techniques
1. **Efficient Data Structures**: Use HashMaps instead of arrays where needed.
2. **Precompute Results**: Use memoization or caching.
3. **Avoid Unnecessary Computations**: Use pruning techniques (e.g., early termination in loops).
4. **Divide and Conquer**: Reduce problem size recursively.

### 4.2 Space Optimization Techniques
1. **Modify Input In-Place**: Modify arrays instead of creating new ones.
2. **Iterative Approach**: Replace recursion with loops to reduce stack usage.
3. **Bit Manipulation**: Store multiple boolean values in an integer.

---

## 5. Interview Problems
### 5.1 Time Complexity Questions
1. **Find time complexity of nested loops:**
   ```cpp
   for (int i = 0; i < n; i++) {
       for (int j = 0; j < n; j++) {
           cout << i << j;
       }
   }
   ```
   **Answer:** O(n²)

2. **Optimize Fibonacci Sequence Calculation** (Use Memoization):
   ```cpp
   unordered_map<int, int> memo;
   int fibonacci(int n) {
       if (n <= 1) return n;
       if (memo.find(n) != memo.end()) return memo[n];
       return memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
   }
   ```
   **Time Complexity:** O(n)

### 5.2 Space Complexity Questions
1. **Space complexity of iterative Fibonacci?**
   ```cpp
   int fibonacci(int n) {
       int a = 0, b = 1, c;
       for (int i = 2; i <= n; i++) {
           c = a + b;
           a = b;
           b = c;
       }
       return b;
   }
   ```
   **Answer:** O(1)

2. **Find Space Complexity of a Recursive Function:**
   ```cpp
   int fact(int n) {
       if (n == 1) return 1;
       return n * fact(n - 1);
   }
   ```
   **Answer:** O(n)

---

## 6. Summary
| Concept | Key Points |
|---------|-----------|
| Time Complexity | Measures execution time as a function of input size |
| Space Complexity | Measures memory usage of an algorithm |
| Optimizations | Use efficient data structures, memoization, pruning, and iterative approaches |

Mastering time and space complexity is crucial for coding interviews. Understanding these principles will help in analyzing and optimizing algorithms effectively.
