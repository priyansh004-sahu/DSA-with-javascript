 function numJewelsInStones(jewels, stones) {
    let count = 0;
    
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (stones.charCodeAt(i) === jewels.charCodeAt(j)) {
                count++;
                break;
            }
        }
    }
    
    return count;
};
console.log(numJewelsInStones("aAA", "aAAbbbb"));


// using set 

function numJewelsInStones(jewels, stones) {
    let jewelSet = new Set(jewels);
    let count = 0;

    for (let stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }
    return count;
};
console.log(numJewelsInStones("aAA", "aAAbbbb"));
