let nilai = 75;
let ucapan;
//? Jika kasus seperti ini lebih baik pakai tenary operator
if (nilai >= 75) {
    console.log("Selamat anda lulus");
} else {
    console.log("Coba lagi");
}

//? Tenary Operator
const nilai1 = 75;
ucapan = nilai1 >= 75 ? "Anda Lulus" : "Anda Gagal";
console.log(ucapan);

//? Nullish Coalescing Operator mirip tenary bedanya ?? khusus null and undifined
let parameter;
let data = parameter ?? "Nilai Default";
console.log(data);