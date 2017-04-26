/*
Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays(in C an array of Pair), each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

Examples:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see Example Tests: for more details.
*/

function listSquared(m, n) {
  var divisors = [], allDivisors = [], sumOfSquaredDivisors = [], reqRes = [], pos = 0;
  for( var i = m; i < n; i++){
    for(var k = 1; k <= i; k++){
      if(i % k === 0){
        divisors.push(k);
      }
    }
    //console.log(divisors);
    allDivisors.push(divisors);
    divisors = [];
  }
 // console.log(allDivisors);
  
  allDivisors.forEach(function(elem, index){
    elem.map(function(item, itemIndex){
      elem[itemIndex] = item * item;
    });
  });
  
  allDivisors.forEach(function(elem, index){
    sumOfSquaredDivisors[index] = elem.reduce(function(acc, item, itemIndex){
      return acc + item;
    }, 0);
  });
  //console.log(sumOfSquaredDivisors);
  sumOfSquaredDivisors.forEach(function(elem, index){
    if(Math.sqrt(elem) % 1 === 0){
      reqRes[pos] = [m+index, elem]; 
      pos++;
    }
  });
  //console.log(reqRes);
  return reqRes;
   
}