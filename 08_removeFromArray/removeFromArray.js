const removeFromArray = function (arr, ...arg) {
  // const index = arr.indexOf(arg);
  // arr.splice(index, 1);
  // return arr
  const res = arr.filter((item) => {
    return !arg.includes(item)
  })
  return res
};

// Do not edit below this line
module.exports = removeFromArray;
