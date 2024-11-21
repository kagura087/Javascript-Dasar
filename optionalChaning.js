//?Untuk mengakses property daari object dengan data nullish tanpa ini akan eror
let person = {
    address: {
    }
}

let country = person?.address?.country;
console.log(country);