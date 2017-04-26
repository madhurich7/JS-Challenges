/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()

*/


Math.round = function(number) {
  if(number % 1 !== 0){
    var arr = number.toString().split('.');
    if(arr[1].split('')[0] >= 5){
      return (arr[0]*1 + 1);
    }else{
      return (arr[0]*1);
    }
  }else{
    return number;
  }
};

Math.ceil = function(number) {
  if(number % 1 !== 0){
    return (number.toString().split('.')[0]*1 + 1);
  }else{
    return number;
  }
};

Math.floor = function(number) {
  if(number % 1 !== 0){
    return (number.toString().split('.')[0]*1);
  }else{
    return number;
  }
};