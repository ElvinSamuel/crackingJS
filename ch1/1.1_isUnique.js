/*
Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?
*/

var isUnique = function(str) {

	for (var i = 0; i < str.length - 1; i++) {
		for (var j = i + 1; j < str.length - 1; j++){
			if ( str[i] === str[j]){
				return false;
			}
		}
	}

	return true;

}



/*
	TESTING
*/

var test1 = "This string doesn't work"
var test2 = "Works";

console.log(isUnique(test1));
console.log(isUnique(test2));
