/*
[2,5,3,6], 10

22222
55
2233
226
253


                      10, 0
          /       /           \         \
      8, 0     5, 1         7, 2        4, 3

*/


const fib = num => {
    const cache = {};
    
    const fibHelper = n => {
      if(n < 2) return n;
      if(n in cache) return cache[n];
      
      return cache[n] = fib(n - 1) + fib(n - 2);
    }
    return fibHelper(num)
  }
  
  console.log(fib(5))
  