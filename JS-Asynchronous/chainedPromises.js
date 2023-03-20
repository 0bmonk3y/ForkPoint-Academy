/* var input = function(word){
}

.then(function(cap){
    capitalize(word)
})
.then(function(sortWords){
    sort(word)
})
.catch(function(error){
    // handle
});
 */

function capitalize(words) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(words)) {
            reject(new Error("Input is not an array"));
        } 
        else {
            const capitalized = words.map(word => {
                if (typeof word !== "string") {
                    throw new Error ("Input array contains non-string elemensts");
                }
                return word.charAt(0).toUpperCase() + word.slice(1);
            });
            resolve(capitalized);
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(words)) {
            reject(new Error("Input is not an array"));
        } 
        else {
            const sorted = words.sort();
            resolve(sorted);
        }
    });
}

// Chaining the functions
var words = ["dog", "severe", "DXC"]
capitalize(words)
.then(capitalized => sortWords(capitalized))
.then(sorted => console.log(sorted))
.catch(error => console.error(error));