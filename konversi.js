let nilai1 = parseFloat("1.9"); //?rubah string ke float
let nilai2 = parseInt("salah"); //? rubah string ke int
let nilai3 = Number("1.11"); //? rubah string ke int atau float
let nilai4 = 3;
let nilai5 = 4;
result1 = nilai2 * nilai1;
result2 = nilai4.toString() + nilai5.toString();
console.log(result1);
console.log(result2);
console.log(parseInt("1a")); //ngecek dari depan mentolerir kesalahan
console.log(parseFloat("1.1a1"));
console.log(Number("1a")); //tidak mentolerir kesalahan sekecil apapun
console.log(isNaN(nilai2)); //ngecek apakah bilangan NaN atau bukan


