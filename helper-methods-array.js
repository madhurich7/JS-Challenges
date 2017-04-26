
/*
Explanation:

square() must return a copy of the array, containing all values squared, the original array must not be changed
cube() must return a copy of the array, containing all values cubed, the original array must not be changed
average() must return the average of all array values, average() on an empty array must return NaN
sum() must return the sum of all array values
even() must return an array of all even numbers, the original array must not be changed
odd() must return an array of all odd numbers, the original array must not be changed
Examples:

var numbers = [1, 2, 3, 4, 5];
numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]
*/

Array.prototype.square = function(){
  var squared = [];
 this.forEach(function(elem, index){
    squared[index] = elem*elem;
  });
  return squared;
};

Array.prototype.cube = function(){
  var cubed = [];
 this.forEach(function(elem, index){
    cubed[index] = elem*elem*elem;
  });
  return cubed;
};

Array.prototype.average = function(){
  if(this.length !== 0){
    var sum = this.reduce(function(acc, elem, index){
      return acc + elem;
    }, 0);
    return sum/(this.length);
  }else{
    return NaN;
  }
};

Array.prototype.sum = function(){
 var total = this.reduce(function(acc, elem, index){
    return acc + elem;
  }, 0);
  return total;
};

Array.prototype.even = function(){
  var evens = [];
  this.forEach(function(elem, index){
    if(elem % 2 === 0){
      evens.push(elem);
    }
  });
  return evens;
};

Array.prototype.odd = function(){
  var odds = [];
 this.forEach(function(elem, index){
    if(elem % 2 !== 0){
      odds.push(elem);
    }
  });
  return odds;
};