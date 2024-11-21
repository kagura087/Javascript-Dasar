//? push = menambah item pada akhir array
//? pop = menghapus item pada akhir array
//? shift = menghapus item pada awal array
//? unshift = menambah item pada awal array
{
//? indexOf = sama kaya indexOf string
    const beasts = ['ant', 'bison', 'camel', 'duck'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('duck', 2));
// Expected output: 3

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

}
//? join = membuat suatu string dari sebuah array
{
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];

    const array3 = array1.join();
    console.log(array3);
}
//? reverse = membalikkan urutan nilai dari array
//? slice = menyalin sebagian nilai dari array
let a = [1, 2, 3, 4];
a.splice(2, 1); //menghapus 1 elemen pada index ke 2
a.splice(2, 0, "February"); //menghapus 0 elemen dan menambah "February" pada index ke 2
console.log(a);
a.reverse();
console.log(a);
{
    //? concat = menggabungkan 2 array atau lebih jadi satu array
    // const array1 = ['a', 'b', 'c'];
    // const array2 = ['d', 'e', 'f'];
    // const array3 = ['g', 'h', 'i'];
    // const array4 = ['j', 'k', 'l'];
    // const array5 = array1.concat(array2, array3, array4); //> Array ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
    // console.log(array5);
}
{
//?splice(index dihapus/ diubah, jumlah dihapus, dirubah = menghapus atau mengubah element
    // const month = ["Januari", "Maret", "April", "Mei", "Juli"];
    // month.splice(1, 0, "Februari");
    // console.log(month);
    // month.splice(5, 1, "Juni");
    // console.log(month);
    // month.splice(3, 2, "Oktober");
    // console.log(month);
}
{
//?sort = mengurutkan nilai pada array
    // const number = [5, 3, 6, 7, 8];
    // number.sort();
    // console.log(number);
}
{
    //? includes = mencari suatu nilai dalam array
    // let a = [1, 2, 3, 4];
    // let b = a.includes(4);
    // console.log(b);
}