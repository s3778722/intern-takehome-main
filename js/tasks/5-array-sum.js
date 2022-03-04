#! npm test ./tests/5-array-sum.js

/**
 * Sums all integers in a nested array, no matter how many levels deep.
 * @param {Array} startOfTree An array containing other arrays, ints, strings..
 * @returns {Number} The sum of all integers contained in the input, at any level.
 */

/** 
 *  Time Complexity: O(n), n being the length of the elements in the array
 *  Space Complexity: O(d), d being the depth of the array 
*/
export default function arraySum(startOfTree) {
    //declare the result variable as sum
    let sum = 0
    //Loop through the tree
    startOfTree.forEach(element => {
        //Check if the type of the element is number
        if (typeof element === 'number'){
            //Add it to the sum
            sum += element
        //Else if the element is an array
        } else if ( element instanceof Array){
            //Perform arraySum recursively.
            sum += arraySum(element)
        }
    });
    return sum
}
