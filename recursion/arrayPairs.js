/*
 * Given an array of integers, create an array of two-item arrays
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */
/*
[1, 2, 3, 4, 5, 6]
        
*/

function arrayPairs(arr) {
  let resultArr = [];

  const pairHelper = i => {
    if (i >= arr.length) return;

    resultArr.push([arr[i], arr[i + 1]]);
    pairHelper(i + 2);
  };
  pairHelper(0);
  return resultArr;
}
