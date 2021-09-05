"use strict";

/*1, You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
function double(num){
    return num*2;
}
console.log(double(20));

/**
 * @returns {number} 100 times the input
 */
 function times100(){
 }


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(){
}

