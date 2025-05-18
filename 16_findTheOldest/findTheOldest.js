const findTheOldest = function (arr) {
  let output = arr.reduce((previous, current) => {
    if (!previous.yearOfDeath) {
      previous.yearOfDeath = new Date().getUTCFullYear();
    }

    if (!current.yearOfDeath) {
      yearOfDeath = new Date().getUTCFullYear();
    }

    if ((previous.yearOfDeath - previous.yearOfBirth) < (current.yearOfDeath - current.yearOfBirth)) {
      previous = current;
    }
    return previous;
  })
  return output;
};

// Do not edit below this line
module.exports = findTheOldest;
