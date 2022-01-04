/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const words = s.trim().split(" ");
    return words.length > 0 ? words[words.length - 1].length : 0;
};


/*

- we need to trim the given string to remove the extra spaces
- split the string into separate words using the space character
- check to see if there are words whos length is greater than 0
- return the length of the last word
- otherwise we return zero

*/
