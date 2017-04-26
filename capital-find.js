
/*
Instructions

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/
var capitals = function (word) {
  var reg = /[A-Z]/, res = [];
	// Write your code here
	for(var i = 0; i < word.length; i++){
	  if(word.charAt(i).match(reg)){
	    res.push(i);
	  }
	}
	return res;
};