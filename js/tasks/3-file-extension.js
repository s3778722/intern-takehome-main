#! npm test ./tests/3-file-extension.js

/**
 * Returns the file extension of a filename.
 * @param {String} filename The string from which to extract the file extension
 * @returns {String} The file extension (with no period), or false if there is none.
 */
export default function getFileExtension(filename) {
    //Split the string into an array of substrings between '.' .
    //Pop to get the last substring.
    const fileExtension = filename.split('.').pop()
    //If there's no file extension, return false
    if (fileExtension === filename){
        return false
    }
    return fileExtension
}
