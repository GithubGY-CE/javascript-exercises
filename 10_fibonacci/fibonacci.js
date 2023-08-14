const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    else if (num === 1 || num === 2) {
        return 1;
    } else {
        let firstNum = 1;
        let secondNum = 1;
        let container;
        let x = 2;
       for (x = 2; x < num; x++) {
            container = secondNum; 
            secondNum += firstNum;
            firstNum = container;
        }
        return secondNum;
    }
};

//npm run test fibonacci.spec.js

// Do not edit below this line
module.exports = fibonacci;
