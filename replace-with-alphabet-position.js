/*
Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)
*/

function alphabetPosition(text) {
  var arr = text.split(' ').join('').split(''), res = [];
  arr.forEach(function(elem, index){
    if(elem.toLowerCase().match(/[a-z]/)){
      res.push(elem.toUpperCase().charCodeAt(0) - 65 + 1);
    }else{
      res.push(null);
    }
  });
  //remove 'nulls' from 'res'
  for(var i = 0; i < res.length; i++){
    if(res[i] === null){
      res.splice(i, 1);
      i--;
    }
  }
  return res.join(' ');
}