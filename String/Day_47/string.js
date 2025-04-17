function printEachChar(str) {
    // Write your logic here
     for(var i=0; i< str.length; i++) {
         console.log(str[i])
     }
}
printEachChar("priyansh")

/**
 * @param {string} str
 * @return {string}
 */
 
function reverseString(str) {
    let reverseString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}
console.log(reverseString('car'));

