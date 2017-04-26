/*

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
*/

function revrot(str, sz) {
  //var arr = str.match(/.{1,size}/g);
  var sum, each, firstInEach, arr = [];
  if(sz <= 0 || str === "" || sz > str.length){
    return "";
  }
  for(var i = 0; i < str.length; i+=sz){
    arr.push(str.substring(i, i + sz));
  }
  console.log(arr);
  arr.forEach(function(elem, index){
    if(elem.length === sz){
      each = elem.split('');
      sum = each.reduce(function(acc, elem, index){
        return acc + (elem * elem * elem);
      }, 0);
      console.log(sum);
      if(sum % 2 !== 0){
        //if sum is odd, then put first element in each to last
        firstInEach = each.shift();
        each.push(firstInEach);
        arr[index] = each.join('');
      }else{
        //else reverse the digits in 'each'
        arr[index] = each.reverse().join('');
      }
    }else{
      arr[index] = null;
    }
  });
  return arr.join('');
}