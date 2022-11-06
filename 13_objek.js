//index pada JS array biasa adalah number
//pada PHP index bs berupa string(a.k.a hash 
// atau associate array)
//jika kita memaksa bukan number pada indeks array JS
//JS akan merubahnya jd objek, ini justru bahaya
//di python ini adalah dictionary

//tipe data objek mirip dg array
//indeks pada objek bisa string atau number
//sebutan indeks pada objek dsebut propertis/atribut
//array pake []
//objek pake {}

let person ={};
// operasi mirip di array
//properti/ index pake string
person["nama"] = "eko kurniawan";
person["alamat"] = "Indonesia";
person["umur"] = "30";
console.table(person);
//atau cara deklar objek
let orang = {nama:"jokorowo", alamat:"brazil", umur:30}
console.table(orang);
console.log(orang);
//mengambil properti tertentu
console.log(`nama: ${orang.nama} alamat: ${orang.alamat}`);
//atau
console.log(`nama: ${orang["nama"]} alamat: ${orang["alamat"]}`);
