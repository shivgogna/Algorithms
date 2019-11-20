/* 
Time Complexity: O(2^(M+N))
Auxiliary Space Complexity: O(M+N)

Diagram

(0,0)__|(1,0)|__(2,0)__|(3,0)|
|      |     |      |  |     |
(0,1)__|(1,1)|__(2,1)__|(3,1)|
|      |     |      |  |     |     
(0,2)__|(1,2)|__(2,2)__|(3,2)|

                                      (0,0)
                    (0,1)                                 (1,0)
            (0,2)           (1,1)                 (2,0)           (1,1)
      (0,3)      (1,2)  (2,1)   (1,2)          (3,0)  (2,1)    (2,1)   (1,2)


Pseudo Code
Declare cache to track row and col
Declare paths equals 0
Declare key 

Declare pathHelper with row and col
  key equals row_col
  if row && col are in cache
    return
  if row is greater than x OR col is greater than y
    return
  if row equals x AND col equals y
    return paths +=1
  
  cache[key] = pathHelper(row + 1, col), pathHelper(row, col + 1)

Call pathHelper with 0 and 0
Return paths
*/

const latticePaths = (x, y) => {
  let cache = {};

  const pathHelper = (row, col) => {
    if (cache[`${row}.${col}`]) return cache[`${row}.${col}`];
    if (row > x || col > y) return 0;
    if (row === x && col === y) return 1;

    let result = pathHelper(row + 1, col) + pathHelper(row, col + 1);
    cache[`${row}.${col}`] = result;
    return result;
  };
  console.log(cache);
  return pathHelper(0, 0);
};
