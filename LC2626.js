// Array reduce transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    for (i = 0; i< nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init;
};

console.log(reduce([1, 2, 3, 4], (accum, curr) => {return accum + curr}, 0))