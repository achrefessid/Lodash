const array = require('lodash/array')

// Examples : 

// ==============================================================================

// _.compact(array)

/*Create an array with all falsey values removed. The values false, null, 0, "", undefined, 
and NaN are falsey. */

// console.log(array.compact([0,1,null,"",2,NaN,3,false,4]))  // [ 1, 2, 3, 4 ]

// ==============================================================================

// _.drop(array, [n=1]) :

/* Creates a slice of array with n elemnets dropped from the beginning. */

// console.log(array.drop([1,2,3],0))    // [ 1, 2, 3 ]
// console.log(array.drop([1, 2, 3]))    // [ 2, 3 ] 
// console.log(aaray.drop([1,2,3],2))    // [ 3 ]
// console.log(aaray.drop([1,2,3],5))    // []

// ==============================================================================

// _.join(array, [separator=',']) :

// Converts all elements in arrays into a string sepatrated by separator.

// console.log(array.join(['lodash','crash','course']))       // lodash,crash,course
// console.log(array.join(['lodash','crash','course']," "))   // lodash crash course

// ==============================================================================

// _.reverse(array) :

/* Reverse array so that the first elemnt becomes the last, the second elemnt becomes 
the last, the second elemnt becomes the second to last, and so on */

// console.log(array.reverse([1,2,3,4,5])) //[ 5, 4, 3, 2, 1 ]

// ==============================================================================

// _.union([arrays]) :

/* Creates an array of unique values, in order, from all given arrays. */

// console.log(array.union([2], [1,2,3]))     //[ 2, 1, 3]


