const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numberArray) {
  return numberArray.reduce((sum,number) => sum + number, 0);
};

const multiply = function(...numberArray) {
  return numberArray.reduce((product,number) => product * number);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let factorial = 1;
	for(let x = num ; x > 1; x--) {
    factorial *= x;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
