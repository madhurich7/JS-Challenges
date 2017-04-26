
/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
 var str = string.toLowerCase();
 var arr = str.split(' ').join('').split('');
 //console.log(arr);
 var filteredArr = arr.filter(function(elem, index, copy){
    if(elem.match(/[a-z]/)){
      return copy.indexOf(elem) == index;
    }
  });
  if(filteredArr.length === 26){
    //console.log(filteredArr);
    return true;
  }else{
    //console.log(filteredArr);
    return false;
  }
}