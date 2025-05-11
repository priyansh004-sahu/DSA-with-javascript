function Parenthesis(n, ans, left, right, temp) {
  if (left + right == 2 * n) {
    ans.push(temp.join("")); // convert array to string before pushing
    return;
  }

  if (left < n) {
    temp.push("(");
    Parenthesis(n, ans, left + 1, right, temp);
    temp.pop();
  }

  if (right < left) {
    temp.push(")");
    Parenthesis(n, ans, left, right + 1, temp);
    temp.pop();
  }
}

function generateParenthesis(n) {
  let ans = [];
  let temp = [];
  Parenthesis(n, ans, 0, 0, temp);
  console.log(ans);
}

generateParenthesis(2);
