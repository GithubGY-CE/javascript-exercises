const palindromes = function (words) {
    words = words.replace(/\W/g, "").toLowerCase();
    const reverseWords = words.split("").reverse().join("");
    return reverseWords == words;
};

//npm run test palindromes.spec.js

// Do not edit below this line
module.exports = palindromes;
