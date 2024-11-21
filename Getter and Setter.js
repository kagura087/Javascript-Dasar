const person = {
    firstName: "Yudi",
    lastName: "Satria",
    // fullName: function () {
    //     return `${this.firstName} ${this.lastName}`;
    // } //Ketika diakses masih jadi fungsi inginnya jadi property gunakan getter
    //? Getter untuk mengambil data
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    //? Setter untuk mengubah data
    set fullName(value) {
        const array = value.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
};
person.fullName = "Budy Nugraha";
console.table(person);
person.fullName = "Yudi Suryawan";
console.table(person);
console.log(person.fullName);