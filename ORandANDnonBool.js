//? OR Mengambil nilai pertama yang thruty, Jika falsy semua kanan diambil
console.log("Hello" || "");
console.log("" || []);
console.log("0" || "NOL");
console.log(0 || "NOL");
console.log(null || "NULL");
console.log(undefined || "UNDEFINED");

//? Contoh penggunaan

const name = {
    FirstName: "Yudi",
    LastName: "Suryawan"
} 
console.log(name.FirstName || name.LastName);

//? AND Mengambil nilai pertama yang falsy, Jika thruty semua kanan diambil
console.log("Hello" && ""); //""
console.log("" && []); //""
console.log("0" && "NOL"); //"NOL"
console.log(0 && "NOL"); //0
console.log(null && "NULL"); //null
console.log(undefined && "UNDEFINED"); //undefined


