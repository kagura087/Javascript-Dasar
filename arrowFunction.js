// const sayHello = (name) => {
//     const say = `Hello ${name}`;
//     console.log(say);
// }
// sayHello("Edi");

//? Tanpa block
// const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello("Edi");

const sayHello = name => console.log(`Hello ${name}`);
sayHello("Edi");

//? Return Value jika memakai block
const add = (firstNumber, lastNumber) => {
    return firstNumber + lastNumber;
}
console.log(add(10,25));
//? Tanpa Return Value jika memakai block
const sum = (firstNumber, lastNumber) => firstNumber + lastNumber//return;
console.log(sum(10, 20));

//? Arrow function sebagai parameter
function giveMeName(callback) {
    callback("Yudi");
}
//Anonymous function
// giveMeName(function (name) {
//     console.log(`Hello ${name}`)
// })

//Arrow function
giveMeName((name) => console.log(`Hello ${name}`));