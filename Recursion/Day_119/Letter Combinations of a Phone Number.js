function Solve(dig, i, curr, ans, map) {
    if(i == dig.length) {
        if(curr.length > 0) {
            ans.push(curr);
            return
        }
    }

    let S = map.get(dig.charAt(i));

    for(var j=0; j<S.length; j++) {
        Solve(dig, i+1, curr + S.charAt(j), ans, map);
    }
}
var letterCombinations = function(digits) {
    let ans = [];
    let map = new Map();
    map.set('2', 'abc');
    map.set('3', 'def');
    map.set('4', 'ghi');
    map.set('5', 'jkl');
    map.set('6', 'mno');
    map.set('7', 'pqrs');
    map.set('8', 'tuv');
    map.set('9', 'wxyz');
    
    Solve(digits, 0, "", ans, map);
    return ans;
};

console.log(letterCombinations("23"));
