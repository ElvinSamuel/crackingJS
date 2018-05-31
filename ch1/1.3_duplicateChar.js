/*
Design an algorithm and write code to remove the duplicate characters in a string
without using any additional buffer. NOTE: One or two additional variables are fine.
An extra copy of the array is not.

FOLLOW UP
Write the test cases for this method.
*/

function duplicateChar(str){

	var strArr = str.split('');	
	
	for ( var i = 0; i < str.length - 1; i++) {
		for ( var j = i + 1; j < str.length - 1; j++){
			if ( str[i] === str[j] ) {
				strArr.splice(j, 1);
				j--;  
			}
		}
	}

	return strArr;
}



/*
	TestBois
*/

var testStr1 = "Letters."
var testStr2 = "Tennessee."
var testStr3 = "The quick fox jumps."


console.log(duplicateChar(testStr1));
console.log(duplicateChar(testStr2));
console.log(duplicateChar(testStr3));
