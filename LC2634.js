// Filter elements from array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const output = []
    for (i = 0; i< arr.length; i++){
        const rslt = fn(arr[i], i)
        if (rslt) {
            output.push(arr[i])
        }
    }
    return output
};

console.log(filter([10, 20, 30], (n)=> {return n > 10}))