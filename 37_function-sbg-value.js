//function tdk hny sbg kode program yg bs dieksekusi
//-tetapi bs sbg value
//function bs disimpan sbg variabel, bs jg dikirim ke parameter
//contoh:
function sayHello(nama){
    console.log(`haloo bro ${nama}`);
}
let say=sayHello; //inisiasi function sbg variable/value
say("jokolotok versi function value"); //manggil variable berisi function
sayHello("Jokolotok"); //function biasa

//contoh function di parameter
let panggil=sayHello;
function giveName(callback){
    callback("eko");
}
giveName(sayHello); //kirim sayHello ke function giveName
giveName(panggil);