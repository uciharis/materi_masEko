/**
 * --- destructuring ---
 * adalah fitur utk membongkar value di array atau object ke dalam variabel
 * fitur ini sangat berguna ketika kita ingin mengambil data dari array/ objek
 * -tanpa harus mengambil data satu per satu
 */
// --- contoh ambil data secara manual
// contoh array
const names = ["eko", "kowi", "eowiii", "eowai", "kowawaii"];
const firstName = names[0];
const middleName = names[1];
const lastName = names[2];
console.log(firstName);
console.log(middleName);
console.log(lastName);

// ---contoh ambil secara destructuring
const [firstNama, middleNama, lastNama]= names; //karena destrukturing array maka pakai kurung siku biasa []
console.info(firstNama);
console.info(middleNama);
console.info(lastNama);
// misal ingin menyimpan variabel sisanya (array 5 karakter namun diambil 3 sisanya others)
// gunakan spread operator " ..."
// contoh:
const [namaPertama, namaTengah, namaAkhir, ...lainnya]= names;
console.info(namaPertama);
console.info(namaTengah);
console.info(namaAkhir);
console.info(lainnya); //sisanya data yang tidak tertampung di keluarkan dalam bentuk array
console.log(" -------------------- ");
// contoh destructuring objek

const mobil = { 
    nama: "suzaki",
    warna: "merah",
    mesin: 3500
};
const namaMobil = mobil.nama; //cara lama
console.info(namaMobil);
const {x,y,z} = mobil;
console.log(x);