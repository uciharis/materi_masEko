//anonymous funct
//biasa function punya nama
//ada fitur function tanpa nama
//contoh:
let say= function (nama){ //anonymous function dimasukkan k dlm variabel
    console.log(`hello ${nama}`);
}
say("joko"); //memanggil anonymous funct lewat variabel say
//bungkus function ke dalam variabel

function giveName(nama){
    nama("eko");
}
giveName(function(nama){ //function nama dijadikan parameter
    console.log(`haloo ${nama}`);
});