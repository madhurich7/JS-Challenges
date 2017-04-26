/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Please note that using "encode" in Python is considered cheating.*/

function rot13(message){
  var arr = message.split(' ');
  arr.forEach(function(elem, index){
    arr[index] = rotateWord(elem);
  });
  return arr.join(' ');
}



function rotateWord(word){
  var arr = word.split(''), res = [];
  arr.forEach(function(elem, index){
    if(elem.match(/[a-zA-Z]/)){
       if(elem.toUpperCase().charCodeAt(0) >= 65 && elem.toUpperCase().charCodeAt(0) <= 77){
      //console.log(String.fromCharCode(elem.toUpperCase().charCodeAt(0) + 13));
      if(arr[index].toUpperCase() === arr[index]){
        res[index] = String.fromCharCode(elem.toUpperCase().charCodeAt(0) + 13);
      }else if(arr[index].toLowerCase() === arr[index]){
        res[index] = String.fromCharCode(elem.toUpperCase().charCodeAt(0) + 13).toLowerCase();
      }
    
      }else if(elem.toUpperCase().charCodeAt(0) >= 78 && elem.toUpperCase().charCodeAt(0) <= 90){
      if(arr[index].toUpperCase() === arr[index]){
      res[index] = String.fromCharCode((elem.toUpperCase().charCodeAt(0) + 13) - 26);
      }else if(arr[index].toLowerCase() === arr[index]){
      res[index] = String.fromCharCode((elem.toUpperCase().charCodeAt(0) + 13) - 26).toLowerCase();
      }
    }
    }else{
    res[index] = elem;
  }
  
});
  return res.join('');
}