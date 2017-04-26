/*

If you reverse the word emirp you will have the word prime. That idea is related with the purpose of this kata. We should select all the primes that when reversed are a different prime. The palindromic primes should be discarded. For example: 13, 17 are prime numbers and the reversed respectively are 31, 71 which are also primes, so 13 and 17 are emirps But see the cases, 757, 787, 797, these are palindromic primes, with the special property that primes coincides with the reversed ones, so they do not enter in the sequence.

You should create a function find_emirp(), that receives one argument n, as an upper limit and the output should be an array with this structure:

[number of emirps bellow n, largest emirp smaller than n, sum of all the emirps of the sequence bellow n]

Let's some examples:

find_emirp(10) -------> [0, 0, 0] # No emirps for this value of n

find_emirp(50) -------> [4, 37, 98] # there are 4 emirps [13, 17, 31, 37]), the max. value is 37, and the sum = 13 + 17 + 31 + 37 = 98

find_emirp(100) ------> [8, 97, 418] # there are 8 emirps [13, 17, 31, 37, 71, 73, 79, 97], 97 is the highest emirp for this range and the sum of all these 8 emirp primes is 418.
Happy coding!!

(Advise: Do not use a primality test. It will make your code very slow. Create a set of primes using a prime generator or a range of primes producer. Remember that search in a set is faster that in a sorted list or array) (The emirps sequence is registered in OEIS as A006567)
*/
function findEmirp(n){
  var primes = [], reversedPrimes = [], distinctReversedPrimes = [], emirps = [], sumOfEmirps;
 for(var i = 0; i < n; i++){
   if(isPrime(i)){
     primes.push(i);
   }
   
 }
 //reverse the primes obtained
 primes.forEach(function(elem, index){
   reversedPrimes[index] = elem.toString().split('').reverse().join('');
   if(reversedPrimes[index]*1 !== primes[index]){
     distinctReversedPrimes.push(reversedPrimes[index]*1);
   }
 });
 
 //get only distinct reversedPrimes, which are not palindromes
// reversedPrimes.forEach(function(elem, index){
//   if(elem*1 !== primes[index]){
//     distinctReversedPrimes.push(elem*1);
//   }
// });

 distinctReversedPrimes.forEach(function(elem, index){
   //if the reversed 'prime' is also a prime its an 'emirp' so push such numbers into emirps
   if(isPrime(elem)){
     emirps.push(elem.toString().split('').reverse().join('')*1);
   }
 });
 //console.log('primesInDistinctReversedPrimes',primesInDistinctReversedPrimes);
 //sum of emirps
 sumOfEmirps = emirps.reduce(function(acc, elem, index){
   return acc + elem;
 }, 0);
 
 return [emirps.length, emirps[emirps.length - 1] ,sumOfEmirps];
}

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}