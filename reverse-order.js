
/*
Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221
*/
function descendingOrder(n){
  //convert 'n' to string array
 var arr = n.toString().split('');
 console.log(arr);
 //sort in descendingOrder
 arr.sort(function(a, b){
   return b - a;
 });
 var res = arr.join('');
 //convert 'numbered string' to number by multiplying it with 1
 return res * 1;
}

descendingOrder(945984938);