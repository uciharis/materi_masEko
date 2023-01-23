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

let mobil = { 
    nama: "suzaki",
    warna: "merah",
    mesin: 3500
};
const namaMobil = mobil.nama; //cara lama
console.info(namaMobil);
let {nama, warna, mesin} = mobil;
console.log(nama); // cara destrukturing
// nama var utk dipake destrukturing harus sama dengan properti dalam objek tsb
// misal kita destrukturing properti yang banyak namun kita hanya ingin ambil sebagian saja
let dataJual = {
    namaBarang : "kulkas",
    kodeId : 12321232121,
    harga : 10_000,
    asalNegara : "jepang",
    jumlah : 200
};
let {namaBarang, kodeId, ...others} = dataJual; // ...others utk menyimpan data diluar namaBarang dan kodeId
console.log(namaBarang);
console.log(others);

// destrukturing nested object
const orang = {
    prov : "aceh",
    kab : {
        kode : 1105,
        kec : "idi rayeuk",
        desa : "snb dalam",
        dusun : "alue pinang"
    },
    hobi : "manjat"
};
let {prov,kab:{kode,kec,desa,dusun}, hobi} = orang;
console.log(prov);
console.log(kode); //destruktur kab-kode
//tidak bs destruk kab karna sudah didestruk
// console.log(kab); hasil undefined

//destrukturing function parameter
// tidak hanya dilakukan d variabel tetapi juga di dalam function parameter
// hal ini membuat kita mudah ketika ingin mengambil nested data dalam array atau objek dalam function
// contoh :
// ---
function displayPerson(wong){ //cara lama
    console.info(wong.firstN);
    console.info(wong.middleN);
    console.info(wong.lastN);
};
const wong = {
    firstN: "jook ooh",
    middleN : "pakd ehh",
    lastN : "ouwiich"
};
displayPerson(wong);
// -------
function displayPerson({firstN, middleN,lastN}){
    console.log(firstN);
    console.log(middleN);
    console.log(lastN);
}
displayPerson(wong); // cara destrukturing

// ---
function penjumlahan(array){ //cara lama
    return array[0]+ array[1];
}
console.log(penjumlahan([1,1]));
// ---
function tambah([a,b]){
    return a+b;
};
console.log(tambah([3,5]));

// destrukturing tanpa data
// dengan default value
//misal array tanpa data atau objek tanpa properti
const jeneng = ["jokau", "kowau"]; //hanya ada 2 data
const [name1, name2, name3="ini default"] = jeneng; // namun dipanggil 3, maka tetapkan default
console.log(name1, name2, name3); // name3 tidak ada data di array jeneng tp ada nilai default

// ---contoh pada object
const hewan = {
    jenis: "mamalia",
    ukuran: "sangat besar",
};
let {jenis,color="hitam", ukuran}=hewan;
console.log(jenis);
console.log(color); //terisi otomatis hitam jika objek tidak memiliki color alias terisi nilai default
console.log(ukuran);

/* ---catatan---
 * saat destrukturing array, nama variabel bebas
 * saat destrukturing objek, nama variabel harus sama dengan properti
 * namun kita bs mengganti nama variabel lain pada properti dg cara inisiasi nama variabel
 * pengganti pada destrukturing dg titik 2
 * 
 * contoh:
 */
const leptop ={
    ssd:"350 Gb",
    ram: "12 Gb",
    merk: "acer"
};
let {ssd, ram:memori, merk: brand} = leptop; // inisiasi nama var yg berbeda dg properti
console.log(ssd);
console.log(memori); // nama var memori menggantikan ram