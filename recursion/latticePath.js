/*
Diagram

                                          (0, 0)
                     (0, 1)                                     (1, 0)
           (0, 2)            (1, 1)                 (2, 0)                    (1, 1) 
      (0, 3)   (1, 2)    (0, 2)    (2, 1)       (3, 0)    (2, 1)           (2, 1)  (1,2)


Pseudo Code

Call Original Function 
  Declare variable count paths called routes equal to 0

  Declare pathHelper(left, right)
BASE CASE
  if left greater than m OR right greater than n
    return 
  if left equals m && right equals n
    routes += 1
    return

RECURSIVE CASE
    pathHelper(left+1, right)
    pathHelper(left, right+1)


  Call pathHelper(0, 0)

  Return routes
*/

const latticePaths = (m, n) => {
  function latticePaths(m, n) {
    let routes = 0;

    const pathHelper = (left, right) => {
      if (left > m || right > n) return;
      if (left === m && right === n) {
        routes += 1;
        return;
      }
      pathHelper(left + 1, right) + pathHelper(left, right + 1);
    };
    pathHelper(0, 0);
    return routes;
  }
};
