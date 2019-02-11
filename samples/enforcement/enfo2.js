/* R-1.3 Write a short Java method, isMultiple, that takes two long values, n and m, and
returns true if and only if n is a multiple of m, that is, n = mi for some integer i. */


const multiple = function(a, b) {
    if(a % b === 2)
        return true;
    return false;
};


if(multiple(3, 4) === true) 
    console.log('Es multiplo');
else
    console.log('No es multiplo');