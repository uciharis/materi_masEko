// menambah string dg data lain biasa dengan "+"
//kasus tertentu, ribet kalo banyak
//pake fitur string template
//dengan backtick ` beda dengan petik 1 '

let nama = "jokodiwowok";
let tempelete = `nama saya ${nama}`;
console.log(tempelete);
let namaDepan ="muhamad";
let namaTengah ="suoki";
let namaBelakang="minamino";
let namaLengkap = `nama saya : ${namaDepan} ${namaTengah} ${namaBelakang}`
console.log(namaLengkap);

//string template bisa dikasi operatorlogik
let nilaiKu =95;
let hasilKu = `${namaLengkap} lulus:${nilaiKu>80}`;
console.log(hasilKu);

//string template bisa string multiline
let konten = `nama saya moeldoko
saya goblok dan pemakan uang rakyat
pilih saya nanti
pas pemilu
terima kasih`;

console.log(konten);