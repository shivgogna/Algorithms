/*
 * Given a base and an exponent, create a function to find the power
 *
 * Input:   base {Integer}
 * Input:   exponent {Integer}
 * Output:  {Integer}
 *
 * Example: power(3, 4) => 81
 *
 * 1 --> 3 --> 9 --> 27 --> 81
 */
function power(base, exponent) {
  let result = 1;

  function powerHelper(counter) {
    if (counter === exponent) return;

    result *= base;
    powerHelper(counter + 1);
  }
  powerHelper(counter);
  return result;
}
