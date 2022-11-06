//for in adalah loop for yg digunakan utk mengiterasi seluruh data properti
//di objek atau indeks di array
//meskipun for in bs digunakan utk array,namun tdk direkomendasikan
//untk penggunaan di array bs menggunakan for of
//contoh:
const person = {
    firstName: "eko",
    middleName: "kurniawan",
    lastName: "khannedy"
};
for (const label in person) {
    console.log(`properti ${label} : ${person[label]}`);
}

const nama = ["eko", "kurniawan", "khannedy"];
for (const rincian in nama) {
    console.log(`${rincian} : ${nama[rincian]}`);
}