//with statement adalah fitur yg digunakan tuk menurunkan sebuah scope data
//kita dapat akses properti dalam sebuah data tanpa perlu
//menyebut datanya
//contoh kode tanpa with statement
const nama={
    firstN: "Ekon",
    middleN: "kuriawan",
    lastN: "khanned"
};
console.log(nama.firstN);
console.log(nama.middleN);
console.log(nama.lastN);
const firstN="teloo";

with (nama) {
    console.log(`dengan with statemen: ${firstN}`);
    console.log(`dengan with statemen: ${middleN}`);
    console.log(`dengan with statemen: ${lastN}`);
}
//meskipun keren, fitur with statement tidak direkomendasikan dipake
//progremer senior tdk merekomendasi penggunaan ini
//penggunaan kode bs jadi ambigu ketika ada properti yg sama padahal
//objek yang berbeda
console.log(firstN);