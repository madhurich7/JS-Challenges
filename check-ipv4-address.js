/*
Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.

It should only accept addresses in canonical representation, so no leading 0s, spaces etc.
*/

String.prototype.ipv4Address = function() {
	var ipv4 = this;
	if(ipv4.trim().length!=ipv4.length) return false;
	var arr = ipv4.split('.');
	if(arr.length!=4) return false;
	for(var i=0; i<arr.length; i++){
		if(!(checkWhiteSpace(arr[i]) && checkLeadZero(arr[i]) && checkForNum(arr[i]))){
			return false;
		}
	}
	return true;
};

function checkWhiteSpace(str){
	return str.trim().length == str.length;
}

function checkLeadZero(str){
	if(str.length==1) return true;
	if(str.charAt(0)==0) return false;
	if(str.charAt(0)=='+') return false;
	else return true;
}

function checkForNum(str){
	var num = parseInt(str);
	if(num>=0 && num<=255) {
		return true;
	}else {
		return false;
	}
}