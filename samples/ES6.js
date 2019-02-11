/* Arrow Functions with parameters */
const myConcat = (arr1, arr2) => arr1.concat(arr2);
let result = myConcat([1, 2], [3, 4, 5]);

/**
 * Higher Order Arrow Functions
 * Take functions as arguments fo precessing collections of data
 * 
 * map()
 * filter()
 * reduce()
 **/ 

/**
 *  Use the Rest Operator with Function Parameters
 * 
 *  Allows to create a function that takes a variable number of argumes.
 *  The rest operaor is: ...
 *  
 **/

//  const sum = (function() {
//     return function sum(...args) {
//         return args.reduce((a, b) => a + b, 0);
//     }
//  })();

//  console.log(sum(1, 2, 3, 4));

/* Use Destructuring Assignment to Assign Variables from Objects */
const AVG_TEMPERATURES = { 
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    // Toma el valor de la propiedad en el objecto y lo asigna a tempOfTomorrow
    const {tomorrow: tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

/* Use Destructuring Assignment to Pass an Object as a Function's */
const stats = {
    max: 23.45,
    standar_deviation: 4.32,
    median: 23.45,
    min: -2.45,
    average: 23.00
};

const half = (function() {
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
})();

console.log(stats);
console.log(half(stats));