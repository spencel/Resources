/* 1 */
// If Statement
// Longhand
var x = 3;
var big;
if (x > 10) {
    big = true;
}
else {
    big = false;
}
// Shorthand
var x = 3;
var big = (x > 10) ? true : false;
// Shorthand weak typing
var x = 3;
var big = (x > 10);

// Else If Statement
// Longhand
var x = 6;
var big;
if (x > 10) {
	big = "greater than 10";
} 
else if (x < 5) {
	big = "less than 5";
}
else {
	"between 5 and 10";
}
// Shorthand
var x = 6;
var big = (x > 10) ? "greater than 10" : (x < 5) ? "less than 5" : "between 5 and 10";

/* 2 */
// Null, Undefined, Empty Checks
// Shorthand
var x = y || ''; // Assigns '' to x if y is undefined

/* 3 */
// Variable Declaration
// Longhand
var x;
var y;
var z = 3;
// Shorthand
var x, y, z = 3;

/* 4 */
// If Present
// Longhand
if (x == true) {}
// Shorthand
if (x) {}

// If Not Present
// Longhand
if (x != true) {}
// Shorthand
if (!x) {}
