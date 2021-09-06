""use strict";

/*You need the module.exports when testing in node.  
 *Comment it out when you send your file to the browser
 */
module.exports = {
    double,
    times100,
    myMap,
    triples
}; //add all of your function names here that you need for the node mocha tests

// 1. Write a function, double, that takes a number and returns 2 times the number.
/**
 *@param {number} num number input
 *@returns {number} double the input
 */

function double(num) {
    return num * 2;
}

console.log(double(20));


//2. Write a function times100 that takes a number and returns 100 times the number.

/**
 * 
 * @param {number} num number input
 * @returns {number} 100 times the input
 */
function times100(n) {
    return n * 100;
}
console.log(times100(5)) //500

/*3. Write a function, myMap, that takes an array and a function and returns a new array that has 
the function applied to each element of the input array. Use your myMap function with your 
double and times100 functions. */

/**
 * 
 * @param {Object} inputArray  input array
 * @param {Object} func  function to map
 * @returns {Array} creates a new array with function mapped to each element
 */

 function myMap(inputArray, func) {
    let newArray = inputArray.map(func);
    return newArray;
}
let testArray = [-10, 0, 10, 20];
console.log(myMap(testArray, double));
console.log(myMap(testArray, times100)); 

/*4. Demonstrate your myMap function with an anonymous function that triples the input value. 
     Write this as an anonymous function expression. Then write it using an arrow expression */
/**
 * 
 * @param {number} number input number
 * @returns {object} return the array triple of each element 
 */
     function triples(number){
         return number*3;
     }

     let myMap = (inputArray, func) =>inputArray.map(func);
     let testArray = [-10, 0, 10, 20];
     console.log(myMap(testArray, triples));// [-30, 0, 30, 60]
//end
