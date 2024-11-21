function sayHelloWorld() {
    console.log("Hello World");
}

for (let i = 0; i < 10; i++) {
    sayHelloWorld();
}

//? Function Parameter and Default Parameter
function sayHello(firstName, LastName = "UNKNOWN") {
    console.log(`Hello ${firstName} ${LastName}`);
}
sayHello("Eko"); // Eko UNKNOWN
sayHello("", "Kanedy"); //  Kanedy
sayHello("Eko", "Kanedy");
sayHello(true, false);
sayHello(1, 2);

for (let i = 0; i < 10; i++) {
    sayHello("Sobat", "Garuda");
}

//? Function Return Value
function writeHello(firstName, LastName) {
    const say = `Hello ${firstName} ${LastName}`;
    return say;
}

const result = writeHello("Yudi", "Surya");
console.log(`Hasil return value = ${result}`);

//? Return value lebih dari satu
function nilai(hasil) {
    if (hasil > 90) {
        return "A";
    }
    else if (hasil > 80) {
        return "B";
    }
    else if (hasil > 70) {
        return "C";
    }
    else {
        return "D";
    }
}

let finalScore = nilai(81);
console.log(`Skor akhir anda adalah ${finalScore}`);

//? Return dapat menghentikan program selanjutnya
function isContains(array, searchValue) {
    for (const element of array) {
        console.log(`element ke ${element}`);
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}

const array = [23, 25, 24, 26, 27, 23, 1, 4, 6, 7];
const searchValue = 27;
const found = isContains(array, searchValue);
console.log(`${found}`);