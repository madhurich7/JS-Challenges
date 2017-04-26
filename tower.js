/*


Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

function towerBuilder(nFloors) {
  var arr = [], t;
  var str = "";
  for(var i = 0; i < nFloors; i++){
    n = (2*i) + 1;
    while(n > 0){
      str = str + "*";
      n--;
    }
    arr.push(str);
    
    str = "";
  }
 
  for(var k = 0; k < arr.length; k++){
    t = arr.length - k;
    while(t > 1){
      arr[k] = " " + arr[k] + " ";
      t--;
    }
  }
  
  return arr;
}
towerBuilder(5);