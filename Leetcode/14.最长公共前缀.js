/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  strs.forEach((v, i) => {
    if (i < strs.length - 1 && strs[i + 1].length < v.length) {
      [strs[i], strs[i + 1]] = [strs[i + 1], strs[i]]
    }
  })
  // return strs
  // strs: [ 'flow', 'flower', 'flight' ]

  for (let [index, minLetter] of Object.entries(strs[0])) {
    for (let str of strs) {
      if (minLetter !== str[index]) {
        return strs[0].slice(0, index)
      }
    }
  }
  return strs[0]
};
// @lc code=end

