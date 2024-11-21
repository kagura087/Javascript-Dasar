{
const person = ["Joko", "Wibowo", "Kulino", "Migoto", "Sulikin"];
// console.log(person[2]); //No destructuring
const [firstName, middleName, lastName, ...others] = person;
console.log(firstName);
console.log(middleName);
console.log(lastName);
    console.log(others);
}

{const person = {
    firstName: "Tsukimichi",
    lastName: "Kagura",
    address: {
        street: "Jalan Buntu",
        city: "Osaka",
        country: "Jepang"
    },
    hobby: "Tidur Siang",
    channel: "Legenda Raja Baru"
};

    // const { firstName, lastName, address, ...others } = person; Jika lebih spesifik bisa
const { firstName, lastName, address: {street, city, country}, ...others } = person;

console.log(firstName);
console.log(lastName);
console.log(street);
console.log(city);
console.log(country);
    console.log(others);
}

{
    //Destructuring di fungsi parameter 1
    function displayPerson({firstName, middleName, lastName}) {
        console.log(firstName);
        console.log(middleName)
        console.log(lastName);
    }

    const person = {
        firstName: "Eko",
        middleName: "Suroto",
        lastName: "Sucipto"
    }
    displayPerson(person)
}

{
    //Destructuring di fungsi parameter 2
    // function sum(value) {
    //     return value[0] + value[1];
    // }
    function sum([firsNumber, secondNumber]) {
        return firsNumber + secondNumber;
    }

    console.log(sum([1, 3]));
}

{
    //Default value destructuring
const person = ["Joko", "Wibowo"];
const [firstName, middleName, lastName = "solikin"] = person;
console.log(firstName);
console.log(middleName);
console.log(lastName);
}

{
    //? Menggunakan nama variabel lain dalam object
    const person = {
        firstName: "Tsukimichi",
        lastName: "Kagura",
};

    // const { firstName, lastName, address, ...others } = person; Jika lebih spesifik bisa
    const { firstName: namaDepan,
        middleName: namaTengah = "Eko",
        lastName: namaBelakang } = person;

    console.log(namaDepan);
    console.log(namaTengah);
    console.log(namaBelakang);
}