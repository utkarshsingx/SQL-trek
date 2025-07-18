// Last updated: 18/07/2025, 10:01:17
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    

        if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let originalX = x; 
    let reversedX = 0;

    while (x > reversedX) {
        let digit = x % 10; // Get the last digit
        reversedX = (reversedX * 10) + digit; // Add it to reversedX
        x = Math.floor(x / 10); // Remove the last digit from x
    }
    return x === reversedX || x === Math.floor(reversedX / 10);
};