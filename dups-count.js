/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'
"aa11" -> 2 # 'a' and '1'
*/
function duplicateCount(text){
  var loweredText = text.toLowerCase();
  var arr = loweredText.split(''), repeats = [];
  console.log(arr, text);
  arr.forEach(function(elem, index){
    if(loweredText.indexOf(elem) !== loweredText.lastIndexOf(elem)){
      //alert(elem);
      repeats.push(elem);
    }
  });
  var filtered = repeats.filter(function(elem, index, copy){
    return copy.indexOf(elem) == index;
  });
  return filtered.length;
}
duplicateCount('aabbcdeB');