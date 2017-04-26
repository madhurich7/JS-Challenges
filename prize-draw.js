/*
To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number n. An array of random weights is linked to the firstnames and each n is multiplied by its corresponding weight to get what they call a winning number.

Example: names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1]

PAUL -> n = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54 The weight associated with PAUL is 2 so Paul's winning number is 54 * 2 = 108.

Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

Task:

parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:

names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1] n: 4

The function should return: PauL

Note:

If st is empty return "No participants".

If n is greater than the number of participants then return "Not enough participants".

*/

function rank(st, we, n) {
  if(st === ""){
    return  "No participants";
  }
  if(n > we.length){
    return  "Not enough participants";
  }
  var arr, charCodeSumOfEach, winnings = [], people = [], peopleSorted;
  var arrOfNames = st.split(',');
  arrOfNames.forEach(function(elem, index){
    arr = elem.split('');
    charCodeSumOfEach = arr.reduce(function(acc, elem){
      return acc + elem.toUpperCase().charCodeAt(0) - 64;
    }, 0);
    winnings.push((elem.length + charCodeSumOfEach) * we[index]);
  });
  for(var i = 0; i < winnings.length; i++){
  people.push({name: arrOfNames[i], win: winnings[i]}); 
  }
  //console.log(people);
  
  peopleSorted = people.sort(function(a, b){
      if(a.win !== b.win){
    return b.win - a.win;
  }else if(a.win === b.win){
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  }
  });
  //console.log(peopleSorted);
  return peopleSorted[n-1].name;
}