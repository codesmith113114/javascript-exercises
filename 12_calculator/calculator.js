const add = function (...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  }, 0)
};

const subtract = function (...args) {
  return args.reduce((prev, curr) => {
    return prev - curr;
  })
};

const sum = function (arr) {
  return arr.reduce((previous, current) => {
    return previous + current
  }, 0)
};

const multiply = function (arr) {
  return arr.reduce((prev, curr) => prev * curr)
};

const power = function (a, b) {
  return Math.pow(a, b)
};

const factorial = function (n) {
  let producnt = 1;
  for (let i = n; i > 0; i--) {
    producnt *= i;
  }
  return producnt;
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
