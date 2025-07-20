// Last updated: 20/07/2025, 22:46:32
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}