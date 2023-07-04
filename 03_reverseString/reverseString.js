const reverseString = function (string) {
    let word = "";
    for (x = 1; x <= string.length; x++) {
        word += string.substr(-x, 1);
    }
    return word;
};

// Do not edit below this line
module.exports = reverseString;
