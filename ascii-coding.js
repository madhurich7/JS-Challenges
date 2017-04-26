/*
Decipher this!
You are given several secret messages you need to decipher. Here are the conditions:

The first letter corresponds to ASCII character code (case sensitive)
The second letter needs to be switched to the last letter
The last letter needs to be switched to the second letter
If it only has one letter, it will be unchanged
If it only has two letters, you will just need to convert the ASCII character code to a letter
Keepin' it simple -- there are no special characters

Example:
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
  var arr = str.split(' '), res = [], codes = [];
  arr.forEach(function(elem, index){
    elem.split('').forEach(function(each, eachIndex){
      if(each.match(/[0-9]/)){
        codes.push(each);
      }
    });
    res[index] = elem.replace(codes.join(''), String.fromCharCode(codes.join('')));
    if(res[index].length > 2){
     var firstReplace = res[index].split('');
     firstReplace[1] = firstReplace[firstReplace.length - 1];
      // var firstReplace = res[index].replace(res[index].charAt(1), res[index].charAt(res[index].length-1));
      var firstReplaceArr = firstReplace.join('').split('');
         firstReplaceArr[firstReplaceArr.length-1] = res[index].split('')[1];
         res[index] = firstReplaceArr.join('');
    }else if(res[index].length === (1 || 2)){
      res[index] = res[index];
    }
    codes = [];
  });
  return res.join(' ');
}