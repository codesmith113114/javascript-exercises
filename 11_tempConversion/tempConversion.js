const convertToCelsius = function (f) {
  const c = (f - 32) / 9 * 5;
  return Number(c.toFixed(1))



};

const convertToFahrenheit = function (c) {
  const f = ((c / 5) * 9) + 32;
  return Number(f.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
