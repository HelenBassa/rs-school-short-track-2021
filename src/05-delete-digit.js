/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayDigits = n.toString().split('');
  const minDigit = Math.min(...arrayDigits);
  const maxNumber = +n.toString().replace(minDigit, '');
  return maxNumber;
}

module.exports = deleteDigit;
