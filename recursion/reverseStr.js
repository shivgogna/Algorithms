/*
 * Reverse a string
 *
 * Input:   str {String}
 * Output:  {String}
 *
 * Example: reverseString('hello') => 'olleh'
 */
function reverseString(str) {
  let result = "";

  function strReversal(i) {
    if (i < 0) {
      return;
    }

    result += str[i];
    strReversal(i - 1);
  }
  strReversal(str.length - 1);

  return result;
}
