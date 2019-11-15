/*
input: 'abc'
output: ['abc','', 'a', 'b', 'c','ab','ac','bc']

                                        ''                         
                           'a'                     ''                   0
                    'ab'       'a'          'b'         ''              1
              'abc'  'ab'    'ac' 'a'     'bc' 'b'   'c'  ''            2  




''     0, str+i, str
''     str  

result = ['abc', 'ab', 'ac', 'a]
if num === input.length - 1
  result.push(str);
  return;

<num of recursive calls> ^ <times you make those recursive calls>
2 ^ 3
two recursive calls
input of length 3

                      
Pseudo Code
original function call(input)
  Declare an empty array called result

  Declare HelperMethod(num, str)
    if num equal to the input.length - 1
      push str into result array
      return
    
    HelperMethod(num + 1, str+input[num])
    HelperMethod(num + 1, str)

  Call HelperMethod(0, "")

  Return result


*/
const powerSet = input => {
  let resultArr = [];

  function powerSetHelper(num, str) {
    if (num === input.length - 1) {
      resultArr.push(str);
      return;
    }
    powerSetHelper(num + 1, str + input[num]);
    powerSetHelper(num + 1, str);
  }
  powerSetHelper(0, "");

  return resultArr;
};
