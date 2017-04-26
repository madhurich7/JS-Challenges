
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

*/
function getCount(str) {
  var vowelsCount = 0;
  //var nreg = new RegExp(/[aeiou]/);
  var arr = str.split(' ').join('').split('');
  //console.log(arr);
  arr.forEach(function(elem, index){
    if(elem == 'a' || elem == 'e' || elem == 'o' || elem == 'i' || elem == 'u'){
      vowelsCount++;
    }else{
      return vowelsCount;
    }
  });
  
  // enter your majic here
  
  return vowelsCount;
}