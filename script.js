// complete the given function

function palindrome(str){
	
	// for(let i=0;i<len/2;i++){
	// 	if(str[i]!==str[len-1-i]){
	// 		return false;
	// 	}
	// }
	// return true;

	const arrayValues=string.split('');
	const reverseArrayValues=ArrayValues.reverse();
	const reverseString=reverseArrayValues.join('');
	if(str==reverseStringString){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
