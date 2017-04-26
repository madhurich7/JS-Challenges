
/*



The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }

*/

function count(string) {  
		  var c = 0, obj = {};
		   for(var i = 0; i < string.length; i++){
		     for(var k = 0; k < string.length; k++){
		       if(i !== k){
		        if(string.charAt(i) === string.charAt(k)){
		          c++;
		        }
		       }
		     }
		     obj[string.charAt(i)] = c + 1;
		     c = 0;
		   }
		   return obj;
		}