const palindromes = function (str) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cleanedStr = str.toLowerCase().split("").filter((item) => {
    return alphanumerical.includes(item)
  }).join("");

  const reversedString = cleanedStr.split("").reverse().join("");

  return reversedString === cleanedStr



};

// Do not edit below this line
module.exports = palindromes;
