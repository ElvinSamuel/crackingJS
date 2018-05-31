/*
Write code to reverse a string. (Original question is for a C-Style string) 
                js makes this easy:
                1) .split('') -- turns string into an array for each character
                2) .reverse('') -- reverse order of array (Array.prototype.reverse())
                3) .join('') -- does the opposite of split (Array.prototype.reverse())
*/

function reverseStr(str){
	return str.split('').reverse().join('');
}


/*
	TESTING
*/

var test1 = "Stringiest of the stringiest stringy strings. Almost too stringy";
var test2 = "Less stringy 12345 string with the 09876 string"


console.log(reverseStr(test1));
console.log(reverseStr(test2));
