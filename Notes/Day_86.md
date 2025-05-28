
# Day 86 – Binary Search Based Problems

## Topic 1: Peak Index in Mountain Array

**Definition**  
In a mountain array (elements first increase and then decrease), the peak index is the index of the maximum element.  
This is also called finding the maximum in a bitonic array.

**Code (JavaScript)**

```js
function peakIndexInMountainArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}
```

**Use Case**  
Used in arrays where elements strictly increase and then strictly decrease —  
e.g., mountain landscapes, performance curves, or trend analysis.

**Interview Q&A**  
**Q:** What approach is used to find the peak in a mountain array?  
**A:** A binary search is used. If `arr[mid] < arr[mid + 1]`, we move right; else we move left.  
The loop stops when `start === end`.

---

## Topic 2: Search in Rotated Sorted Array

**Definition**  
Given a rotated sorted array, the goal is to find the index of a given target element in **O(log n)** time.

**Code (JavaScript)**

```js
function search(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] === target) return mid;

        if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
```

**Use Case**  
Searching in arrays where the order is shifted — common in circular buffers or log-rotated data structures.

**Interview Q&A**  
**Q:** How do you decide which half of the array is sorted?  
**A:** If `nums[start] <= nums[mid]`, then the left half is sorted; otherwise, the right half is sorted.

---

## Topic 3: Book Allocation Problem

**Definition**  
Distribute `n` books among `k` students such that the maximum number of pages assigned to any student is minimized.  
Allocation must be contiguous and every student must get at least one book.

**Code (JavaScript)**

```js
function isPossible(books, students, maxPages) {
    let count = 1;
    let sum = 0;

    for (let pages of books) {
        if (pages > maxPages) return false;

        if (sum + pages > maxPages) {
            count++;
            sum = pages;
            if (count > students) return false;
        } else {
            sum += pages;
        }
    }
    return true;
}

function allocateBooks(books, students) {
    let low = Math.max(...books);
    let high = books.reduce((a, b) => a + b, 0);
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (isPossible(books, students, mid)) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}
```

**Use Case**  
Task assignment in resource-constrained environments: printers, team task load balancing, or storage allocation.

**Interview Q&A**  
**Q:** What’s the range of search space for this problem?  
**A:** Between the maximum single book (`Math.max(...books)`) and total pages (`sum(books)`).

---

## Topic 4: Capacity to Ship Packages Within D Days

**Definition**  
Determine the minimum ship capacity required to transport all packages within D days.

**Code (JavaScript)**

```js
function isValid(weights, D, capacity) {
    let days = 1;
    let total = 0;

    for (let weight of weights) {
        if (total + weight > capacity) {
            days++;
            total = weight;
        } else {
            total += weight;
        }
    }
    return days <= D;
}

function shipWithinDays(weights, D) {
    let low = Math.max(...weights);
    let high = weights.reduce((a, b) => a + b, 0);
    let result = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isValid(weights, D, mid)) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}
```

**Use Case**  
Logistics and shipment optimization where daily capacity constraints are present —  
warehouse to store, delivery route planning, etc.

**Interview Q&A**  
**Q:** What’s the logic for validating a capacity?  
**A:** Simulate shipping using the capacity and count days required.  
If days exceed D, increase capacity.

---

## Topic 5: Koko Eating Bananas

**Definition**  
Koko can eat `k` bananas per hour. Given piles of bananas, find the minimum eating speed `k` so she finishes in `h` hours.

**Code (JavaScript)**

```js
function minEatingSpeed(piles, h) {
    let low = 1;
    let high = Math.max(...piles);

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let hours = 0;

        for (let pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if (hours > h) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}
```

**Use Case**  
Rate optimization problems — servers processing requests per second,  
consumption rate problems in factories, or battery drain rates.

**Interview Q&A**  
**Q:** What is the binary search space in this problem?  
**A:** From 1 to `max(piles)`, since speed can’t be more than the largest pile.
