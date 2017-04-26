/*
Do you speak retsec?

You and your friends want to play undercover agents. In order to exchange your secret messages, you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:

retsec examples

That way, you'll be able to exchange your messages in private.

Task

You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

Examples

reverseByCenter("agent") == "nteag" // center character is e

reverseByCenter("secret")  == "retsec" // no center character
Remarks

Don't use this to actually exchange messages in private.
*/

function reverseByCenter(s){
  var firstHalf, secondHalf, swapped = [];
  if(s.length % 2 !== 0){
    firstHalf = s.slice(0, (s.length - 1)/2);
    secondHalf = s.slice((((s.length - 1)/2) + 1), s.length);
    swapped[0] = (secondHalf);
    swapped[1] = (s.charAt((s.length - 1)/2));
    swapped[2] = (firstHalf);
  }else{
    firstHalf = s.slice(0, s.length/2);
    secondHalf = s.slice(s.length/2, s.length);
    swapped[0] = (secondHalf);
    swapped[1] = (firstHalf);
  }
  return swapped.join('');
}