# Time and Space Complexity: From Basics to Advanced

This guide covers time and space complexity concepts from beginner to advanced levels, helping you prepare for technical interviews. It includes explanations, examples, and common interview-related topics.

---

## Table of Contents
1. [What is Time Complexity?](#what-is-time-complexity)
2. [What is Space Complexity?](#what-is-space-complexity)
3. [Big-O Notation Basics](#big-o-notation-basics)
4. [Common Time Complexities](#common-time-complexities)
5. [Space Complexity Examples](#space-complexity-examples)
6. [Analyzing Complexity Step-by-Step](#analyzing-complexity-step-by-step)
7. [Advanced Topics](#advanced-topics)
8. [Interview Tips](#interview-tips)
9. [Practice Problems](#practice-problems)

---

## What is Time Complexity?

Time complexity measures the amount of time an algorithm takes to run as a function of the input size (`n`). It helps us understand how an algorithm scales with larger inputs.

- **Why it matters**: In interviews, employers want to see how efficiently your solution performs.
- **Units**: Expressed using Big-O notation (e.g., O(n), O(log n)).

---

## What is Space Complexity?

Space complexity measures the amount of memory an algorithm uses as a function of the input size (`n`). It includes:
- **Auxiliary Space**: Extra or temporary space used by the algorithm.
- **Input Space**: Space required to store the input data.

- **Why it matters**: Efficient memory usage is critical for large-scale systems.

---

## Big-O Notation Basics

Big-O notation describes the upper bound of an algorithm's growth rate, ignoring constants and lower-order terms.

### Common Notations
- **O(1)**: Constant time
- **O(log n)**: Logarithmic time
- **O(n)**: Linear time
- **O(n log n)**: Linearithmic time
- **O(n²)**: Quadratic time
- **O(2ⁿ)**: Exponential time

### Rules for Big-O
1. Drop constants: O(2n) → O(n)
2. Drop lower-order terms: O(n² + n) → O(n²)
3. Worst-case is typically emphasized in interviews.

---

## Common Time Complexities

| Complexity    | Description                          | Example Algorithms                     |
|---------------|--------------------------------------|---------------------------------------|
| O(1)          | Constant time                       | Array access, hash table lookup       |
| O(log n)      | Logarithmic time                    | Binary search                         |
| O(n)          | Linear time                         | Linear search, iterating an array     |
| O(n log n)    | Linearithmic time                   | Efficient sorting (e.g., Merge Sort)  |
| O(n²)         | Quadratic time                      | Bubble Sort, nested loops             |
| O(2ⁿ)         | Exponential time                    | Recursive Fibonacci, subset generation|
| O(n!)         | Factorial time                      | Traveling Salesman (brute force)      |

### Examples
1. **O(1)**: Accessing `array[5]`
2. **O(n)**: 
   ```python
   for i in range(n):
       print(i)