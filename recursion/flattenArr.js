/*
 * Flatten a nested array
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 */
/*
Declare resultArr

Declare flattenHelper function
  if typeof equals num
  push num into result arr

  flattenHelper i

Return resultArr
*/
function flatten(arr) {
  const resultArr = [];
  const flattenHelper = subArr => {
    for (let i = 0; i < arr.length; i++) {
      if (typeof subArr[i] === "Number") {
        resultArr.push(subArr[i]);
      } else {
        flattenHelper(subArr[i]);
      }
    }
  };
  flattenHelper(arr);

  resultArr;
}
