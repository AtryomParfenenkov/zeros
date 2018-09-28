module.exports = function getZerosCount(number) {

  // your implementation

  let zeros = 0, reminder = number, divider = 5;

  while (reminder >= 5) {

    reminder = Math.floor(number / divider);

    divider *= 5;

    zeros += reminder;

  }

  return zeros;

}
