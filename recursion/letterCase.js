/*
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
*/

/*
Diagram
                                      ''
a                     'a'                               'A'            
1                     'a1'                              'A1'
b            'a1b'          'a1B'               'A1b'            'A1B'
2            'a1b2'         'a1B2'              'A1b2'           'A1B2'         
c       



 3 choose 3 == [abc]
 3 choose 2 == [ab, ac, bc]
 3 choose 1 == [a,b,c]
 3 choose 0 == ['']

Pseudo Code
Declare resultArr 

Declare permHelper()
  if i === str.length - 1
    push str into resultArr
    return

  if letter is letter
    permHelper(str[i].toUpperCase(), i + 1)
    permHelper(str[i].toLowerCase(), i + 1)
  else
    permHelper(str[i], i + 1)

permHelper('', 0)
return resultArr
*/

/*

regex
  let regex = /[a-zA-Z]/
  str.match(regex)
    do letter stuff
  } else
    do number stuff


letterObject
  { 'a', 'b', 'c', 'd' ... }
  if letterSet.has(str[i])
    do letter shit
  else
    do number shit

type validation
  Number('1') == 1
  Number('a') === NAN != 'a'
  parseInt('1')
*/

const letterCasePermutation = (S) => {
    const resultArr = [];
  
    const permHelper = (str, i) => {
      if (i === S.length) return resultArr.push(str);
  
      if (isNaN(S[i]) == true) {
        permHelper(str + S[i].toUpperCase(), i + 1);
        permHelper(str + S[i].toLowerCase(), i + 1);
      }
      else {
        permHelper(str + S[i], i + 1);
      }
    }
    permHelper('', 0);
    return resultArr;
  };
  
  
  const letterCasePermutation = (S) => {
    const resultArr = [];
  
    const permHelper = (str, i) => {
      if (i === S.length) return resultArr.push(str);
  
      if (Number(S[i]) == S[i]) permHelper(str + S[i], i + 1);
      else {
        permHelper(str + S[i].toUpperCase(), i + 1);
        permHelper(str + S[i].toLowerCase(), i + 1);
      }
    }
    permHelper('', 0);
    return resultArr;
  };