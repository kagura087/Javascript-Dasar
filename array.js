//? Operasi Array
//?Menambah array
let names = ["Yudi"];
names.push("Suryawan", "Satria", "Kuso"); //menambah
console.log(names);
console.table(names); //menampilkan dalam bentuk table

//? Melihat panjang array array.length
console.log(`"Panjang array names adalah: ${names.length}"`);

//? Mendapat data pada posisi index array[index]
console.log(`Array pada posisi 2 adalah ${names[2]}`);
//? Mengubah data pada posisi index array[index] = value
names[2] = "Hikaru";
console.log(`Array pada posisi 2 setelah diubah adalah ${names[2]}`);
//? Mengapus data index tapi index tidak bergeser delete array[index]
delete names[1];
console.table(names); //menampilkan dalam bentuk table
console.log(`"Panjang array names adalah: ${names.length}"`);
names[1] = "Update data";
console.table(names); //menampilkan dalam bentuk table