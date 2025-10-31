// Apply transform over each element in array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for (i = 0;  i < arr.length; i++) {
        arr[i] = fn(arr[i]);
    }
    return arr
};

console.log(map([1, 2, 3], (n) => {return n + 1}))