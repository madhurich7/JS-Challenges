/*

Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]
Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.
*/


function group(arr) {
  var c = 1, each = [], res = [], hash = {}, out = [];

for(var i = 0; i < arr.length; i++){
  for(var j = 0; j < arr.length; j++){
    if(i !== j){
      if(arr[i] === arr[j]){
          c++;
      }
    }
  }
  if(c > 1){
    while(c >= 1){
      each.push(arr[i]);
    //res.push([arr[i]]);
    c--;
    }
    res.push(each);
    each = [];
    c = 1;
  }else{
    res.push([arr[i]]);
  }
  
}
  //console.log(res);
  for(var k = 0; k < res.length; k ++){
    var key = res[k].join('|');
      if (!hash[key]) {
      out.push(res[k]);
      hash[key] = 'found';
    }
  }
  return out;
}