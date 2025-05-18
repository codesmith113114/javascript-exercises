const fibonacci = function (a) {

  let n = parseInt(a)

  if (n > 0) {

    let arr = [1, 1]
    for (let i = 2; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n - 1];
  }
  if (n < 0) {
    return "OOPS";
  }
  else {
    return 0;
  }
};

// Do not edit below this line
module.exports = fibonacci;
