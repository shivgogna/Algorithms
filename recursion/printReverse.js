/*
 * Print each item in an array backwards
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printReverse([1,2,3]) =>
 *          3
 *          2
 *          1
 */

function printReverse(arr) {
  function displayArr(i) {
    if (i === arr.length) return;

    displayArr(i + 1);
    console.log(arr[i]);
  }

  displayArr(0);
}
