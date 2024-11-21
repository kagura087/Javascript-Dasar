//? Berguna untuk ubah parameter menjadi array dengan ...(hanya boleh 1 dan diakhir parameter)
function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    console.log(`Total object ${name} adalah ${total}`);
}

sum("Jeruk", 7, 5, 3, 6, 7, 8, 9, 10);

//? Spread syntax
//? Telanjur punya array bisa diubah jadi parameter dengan ...array

const value = [7, 5, 3, 6, 7, 8, 9, 10];
const result = sum; //fungsi disimpan di variable
result("Eko", ...value);

//? Function di parameter
function giveMe(callback) {
    callback("Eko", 7, 5, 5); //sum("Eko")
}
giveMe(sum); //function sum sebagai parameter function giveMe
giveMe(result);