## Time Complexity Constraints

| Constraints | Minimum Acceptable Time Required | Mathematical Terms |
|-------------|---------------------------------|---------------------|
| N <= 15     | O(N!)                           | Factorial          |
| N <= 30     | O(X^N), Where X is a constant  | Exponential        |
| N <= 10^2   | O(N^3)                          | Cubic              |
| N <= 10^3   | O(N^2) always, O(N^3) not always | Quadratic, Cubic  |
| N <= 10^4   | O(N^2)                          | Quadratic          |
| N <= 5 * 10^4 | O(NLogN), O(N*sqrt(N))        | Linear * Logarithmic, Linear * SquareRoot |
| N <= 10^5   | O(NLogN), O(N*sqrt(N))         | Linear * Logarithmic, Linear * SquareRoot |
| N <= 10^6   | O(NLogN)                        | Linear * Logarithmic |
| N <= 10^7   | O(N)                            | Linear             |
| N <= 10^8   | O(N)                            | Linear             |
| N <= 10^9   | O(sqrt(N))                      | Square Root        |
| N >= 10^9   | O(LogN) or O(1)                 | Logarithmic or Constant |

### Example
Suppose the minimum acceptable time is **O(N^3)**. Then, **O(N^2), O(N*sqrtN), O(NLogN), O(N), sqrt(N), O(LogN), O(1)** will absolutely work out. So kindly refer to the table from top to bottom for better understanding. 📊

