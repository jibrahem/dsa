/* Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const obj = {};
    for (let i = 0; i < words.length; i++) {
        if ((obj[pattern[i]] && obj[pattern[i]] !== words[i])) {
            return false;
        }
        obj[pattern[i]] = words[i];
    }
    return new Set(Object.values(obj)).size === Object.values(obj).length;
};
