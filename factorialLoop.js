function factorial(value) {
    let result = 1;
    for (let i = value; i >= 1; i--) {
        result *= i;
    }
    return result;
}
console.log(factorial(6));

//? FactorialRecursive
function factorialRecursive(value) {
    if (value === 0) {
        return 1;
    }
    else {
        return value * factorialRecursive(value - 1);
    }
}
console.log(factorialRecursive(6));

//factorialRecursive(6)
//6 * factorialRecursive(5)
//6 * 5 * factorialRecursive(4)
//6 * 5 * 4 * factorialRecursive(3)
//6 * 5 * 4 * 3 * factorialRecursive(2)
//6 * 5 * 4 * 3 * 2 * factorialRecursive(1)
//6 * 5 * 4 * 3 * 2 * 1
//~ factorialRecursive(1) = 1;

//? Perulangan with recursive
// function recursive(nilai) {
//     if (nilai === 1) {
//         return "Loop";
//     }
//     else {
//         return recursive(nilai - (nilai - 1));
//     }
// }
// console.log(recursive(10));




