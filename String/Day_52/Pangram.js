// 1832. Check if the Sentence Is Pangram

function checkIfPangram(sentence) {
    let set = new Set();
    for (var i = 0; i < sentence.length; i++) {
        let ch = sentence.charAt(i);
        set.add(ch);
    }
    return set.size === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
