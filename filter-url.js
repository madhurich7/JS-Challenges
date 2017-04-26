/*

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples:

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')
*/

function removeUrlAnchor(url){
  var arr = url.split(''), res;
  if(url.match(/[#]/)){
    arr.forEach(function(elem, index){
      if(elem === '#'){
        res = arr.slice(0, index);
      }
    });
    return res.join('');
  }else{
    return url;
  }
}