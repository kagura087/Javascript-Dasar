//? Digunakan untuk mengambil/iterasi pada value array, object, string, dll
//? For of bisa ambil data iterable di array, string dll Apapun yang bisa iterable
//? For of tidak bisa ambil data object karena object bukan iterable

const names = ["Yudi", "Surya", "Awan"];
for (const name of names) {
    console.log(`${name}`);
}

const character = "Yudi Suryawan";
for (const nama of character) {
    console.log(`${nama}`);
}

//Not iterable
// const person = {
//     FirstName: "Yudi",
//     MiddleName: "Surya",
//     LastName: "Awan"
// } 

// for (const property of person) {
//     console.log(`${property}`); //mengambil property yang berada di dalam person
// }