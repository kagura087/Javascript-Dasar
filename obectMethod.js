// function Hello(name) {
//         console.log(`Hello ${name}`)
//     }
// const person = {
//     name: "Eko",
//     sayHello: Hello
// }
// person.sayHello("Yudi");

const person = {
    name: "Eko",
    sayHello: function sayHello(name) {
        console.log(`Hello ${name}`)
    }
}
person.sayHello("Yudi");

const orang = {
    name: "Eko"
}
//menambah method ke object
// orang.Hello = function (name) {
//     console.log(`Hello ${name}`);
// }
// Dengan arrow
orang.Hello = name => console.log(`Hello ${name}`);
orang.Hello("Budi");