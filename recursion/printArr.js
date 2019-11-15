/*
 * Print each item in an array in order
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printArray([1,2,3]) =>
 *          1
 *          2
 *          3
 */
function printArray(arr) {
  function displayArr(i) {
    if (i === arr.length) return;

    console.log(arr[i]);
    displayArr(i + 1);
  }

  displayArr(0);
}
