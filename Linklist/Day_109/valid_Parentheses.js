
function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
console.log(isValid("[([])]["));



function isValid(s) {
    let stack = [];
    let isFlag = true;

   for(let i=0; i<s.length; i++) {
      let ch = s.charAt(i);
      if(ch == "(" || ch == "{" || ch == "[") {
        stack.push(ch);
        continue;
      }

    if(stack.length == 0) return false;
    
    if(ch == ")") {
        if(stack[stack.length - 1] == "(") stack.pop();
        else {
            isFlag = false;
            break
        }
    }

       if(ch == "}") {
        if(stack[stack.length - 1] == "{") stack.pop();
        else {
            isFlag = false;
            break
        }
    }
       if(ch == "]") {
        if(stack[stack.length - 1] == "[") stack.pop();
        else {
            isFlag = false;
            break
        }
    }

   }
   if(stack.length != 0) return false;
   return isFlag;
};
console.log(isValid("([])"));
