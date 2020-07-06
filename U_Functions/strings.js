const string = require('loadsh/string')

// Examples :

// _.lowerCase([string='']) : 

// Converts string, as space separated words, to lower case.

// console.log(string.lowerCase("Hello LODASH"))    // hello lodash

// =============================================================================================

// _.split([string=''], separator, [limit]) :

// Splits string by separator.

// console.log(string.split('lodash crash course', ' '))     // [ 'lodash', 'crash', 'course' ]
// console.log(string.split('lodash crash course', ' ',2))   // [ 'lodash', 'crash' ]

// =============================================================================================

// _.replace([string='], pattern, replacement) :

//Replaces matches for pattern in string with replacement.

// console.log(string.replace('lodash crash course', 'lodash', 'parcel'))  // parcel crash course

// =============================================================================================

// _.endWith([string=''], [target], [position=string.length]) :

// Checks if string ends with the given target string.

// console.log(string.endsWith('abc', 'c'))       // true
// console.log(string.endsWith('abc', 'b'))       // false
// console.log(string.endsWith('abc', 'b', 2))    // true 

// =============================================================================================

// _.repeat([string=''], [n=1]) :

// console.log(string.repeat('*',3))         //*** 

