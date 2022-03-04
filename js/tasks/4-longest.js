#! npm test ./tests/4-longest.js

/**
 * Returns the longest string out of an array of strings.
 * @param {Array} strings An array that might contain strings.
 * @returns {String} The longest string from within the input array.
 */
export default function longestString(strings) {
    //declare the result as maxString
    let maxString = "";
    //Loop through the strings
    strings.forEach((string) => {
        //Compare if the current string length is greater than the maximum length
        //Check if the element is a string type
        if (string.length > maxString.length && typeof string === "string") {
            //Update the current string as the longest string.
            maxString = string;
        }
    });
    return maxString;
}
