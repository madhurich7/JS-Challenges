/*

Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.

Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe
*/

function reverseWords(str) {
  // Go for it
  var revString = [];
  var arr = str.split(' ');
  arr.forEach(function(elem, index){
    each = elem.split('').reverse().join('');
    revString.push(each);
  });
  return revString.join(' ');
}