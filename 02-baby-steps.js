const params = process.argv

// ATTEMPT #1
// let sum = 0
// for(var i = 2; i < params.length; i++) {
//     sum = sum + new Number(params[i])
// }

// ATTEMPT #2
// let sum = params
//     .slice(2)
//     .map(function(x) {
//         return new Number(x)
//     })
//     .reduce(function(accum, x) {
//         return accum += x
//     })

//ATTEMPT #3
let sum = params
    .slice(2)
    .map(x => new Number(x))
    .reduce((accum, x) => accum += x)

console.log(sum)