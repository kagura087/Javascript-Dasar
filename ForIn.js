//? Digunakan untuk mengambil/iterasi pada property object atau index dalam array

const person = {
    FirstName: "Yudi",
    MiddleName: "Surya",
    LastName: "Awan"
} 

for (const property in person) {
    console.log(`${property}`); //mengambil property yang berada di dalam person
}

for (const property in person) {
    console.log(`${property} : ${person[property]}`); //mengambil property yang berada di dalam person sekaligus isinya
}

//? Array
const names = ["Yudi", "Surya", "Awan"];
for (const index in names) {
    console.log(`${index} : ${names[index]}`);
}
// ?Tidak digunakan karena ambigu
// with (person) {
//     console.log(FirstName);
// }