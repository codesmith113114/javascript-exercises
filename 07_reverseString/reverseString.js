const reverseString = function (str) {
  let convertedToArray = str.split("");
  let reversedConvertedArray = []
  for (let i = convertedToArray.length; i >= 0; i--) {
    ele = convertedToArray[i]
    reversedConvertedArray.push(ele)
  }
  let reversedStrig = reversedConvertedArray.join("")
  return reversedStrig;

};

// Do not edit below this line
module.exports = reverseString;
