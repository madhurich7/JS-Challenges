/*

https://www.codewars.com/kata/prime-number-decompositions/train/javascript/58c9912026d93a6be300007f
You have to code a function getAllPrimeFactors wich take an integer as parameter and return an array containing its prime decomposition by ascending factors, if a factors appears multiple time in the decomposition it should appear as many time in the array.

exemple: getAllPrimeFactors(100) returns [2,2,5,5] in this order.

This decomposition may not be the most practical.

You should also write getUniquePrimeFactorsWithCount, a function which will return an array containing two arrays: one with prime numbers appearing in the decomposition and the other containing their respective power.

exemple: getUniquePrimeFactorsWithCount(100) returns [[2,5],[2,2]]

You should also write getUniquePrimeFactorsWithProducts an array containing the prime factors to their respective powers.

exemple: getUniquePrimeFactorsWithProducts(100) returns [4,25]

Errors, if:

n is not a number
n not an integer
n is negative or 0
The three functions should respectively return [], [[],[]] and [].

Edge cases:

if n=0, the function should respectively return [], [[],[]] and [].
if n=1, the function should respectively return [1], [[1],[1]], [1].
if n=2, the function should respectively return [2], [[2],[1]], [2].
The result for n=2 is normal. The result for n=1 is arbitrary and has been chosen to return a usefull result. The result for n=0 is also arbitrary but can not be chosen to be both usefull and intuitive. ([[0],[0]] would be meaningfull but wont work for general use of decomposition, [[0],[1]] would work but is not intuitive.)
*/

function getAllPrimeFactors(n){
  if(n === 0){
    return [];
  }else if(n === 1){
    return [1];
  }else if(n ===2){
    return [2];
  }else if(n < 0 || isNaN(n) || n % 1 !== 0){
    return [];
  }
  var primesTilln = [], q, primeFactors = [];
  for(var i = 0; i < n; i++){
    if(isPrime(i)){
      primesTilln.push(i);
    }
  }
  console.log(primesTilln);
  for(var j = 0; j <= primesTilln.length; j++){
    while(n % primesTilln[j] === 0){
      q = n / primesTilln[j];
      n = q;
      primeFactors.push(primesTilln[j]);
    }
  }
  return primeFactors;
}

function getUniquePrimeFactorsWithCount(n) {
  if(n === 0){
    return [[], []];
  }else if(n === 1){
    return [[1], [1]];
  }else if(n ===2){
    return [[2], [1]];
  }else if(n < 0 || isNaN(n) || n % 1 !== 0){
    return [[], []];
  }
  var powers = [], primes = [];
  var primeFactors = getAllPrimeFactors(n);
  var obj = getPrimesAndPowersObj(primeFactors);
  for(var x in obj){
    powers.push(obj[x]);
    primes.push(x*1);
  }
  return [primes, powers];
}

function getUniquePrimeFactorsWithProducts(n) { 
  if(n === 0){
    return [];
  }else if(n === 1){
    return [1];
  }else if(n ===2){
    return [2];
  }else if(n < 0 || isNaN(n) || n % 1 !== 0){
   return [];
  }
  var res = [];
  var primeFactors = getAllPrimeFactors(n);
  var obj = getPrimesAndPowersObj(primeFactors);
  for(var x in obj){
    res.push(powerOfNumber(x*1, obj[x]));
  }
  return res;
}

function getPrimesAndPowersObj(primeFactors){
  var c = 1, obj = {};
    for(var i = 0; i < primeFactors.length; i++){
    for(var j = 0; j < primeFactors.length; j++){
      if(i !== j){
        if(primeFactors[i] === primeFactors[j]){
          c++;
        }
      }
    }
    obj[primeFactors[i]] = c;
    c = 1;
  }
  return obj;
}

function powerOfNumber(n, p){
  var con = 1;
  while(p > 0){
    con = n * con;
    p--;
  }
  return con;
}

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}