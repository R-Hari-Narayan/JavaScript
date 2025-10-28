/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const sol = {}
    return {
        toBe: (n) => {
            if (val === n){
                return true
            }
            else {
                raise("Not Equal")
            }},
        notToBe: (n) => {
            if (val !== n){
                return true
            }
            else {
                throw "Equal";
            }}
    }
};


console.log(expect(5).toBe(5)); // true
try {
    expect(5).notToBe(5); // throws "Equal"
} catch (error) {
    console.log(error)
}
