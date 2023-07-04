const sumAll = function (numberFrom, numberTo) {

    if (Math.sign(numberTo) === -1 || 
        Math.sign(numberFrom) === -1 || 
        isNaN(numberFrom) || 
        isNaN(numberTo) || 
        typeof numberFrom === "string" || 
        typeof numberTo === 'string') {
            
        return "ERROR";
    } else if (numberFrom < numberTo) {
        let sum = 0;
        for (x = numberFrom; x <= numberTo; x++) {
            sum += x;
        }
        return sum;
    } else {
        let sum = 0;
            for (x = numberTo; x <= numberFrom; x++) {
                sum += x;
            }
            return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
