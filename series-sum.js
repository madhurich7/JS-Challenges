/*
Task:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:

You need to round the answer upto 2 decimal places and return it as String.
If the given value is 0 then it should return 0.00
You will only be given Natural Numbers as arguments.
Examples:

SeriesSum(1) => 1 = "1"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
NOTE: In PHP the function is called series_sum().

*/

function SeriesSum(n)
{
  var den = [], sum = 0;
  if(n === 0){
    return '0.00';
  }
  else{
    for(var i = 0; i < n; i++){
      if(i === 0){
        den[i] = 1;
      }else if(i > 0){
        den[i] = den[i-1] + 3;
      }
    }
    console.log(den);
    for(var x = 1; x < den.length; x++){
      sum = sum + (1/den[x]);
    }
    return (sum + 1).toFixed(2);
  }
}