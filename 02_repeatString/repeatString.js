const repeatString = function (string, number) {
    if (!number) {
        return "";
    } else if (Math.sign(number) === -1) {
        return "ERROR";
    }
    else {
        let newString = string;
        for (x = 1; x < number; x++) {
            newString += string;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
