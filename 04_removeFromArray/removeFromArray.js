const removeFromArray = function(array, ...args) {
    return array.filter(array => !args.includes(array))
};

// Do not edit below this line
module.exports = removeFromArray;
