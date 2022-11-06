//scope merupakan area akses sebuah data
//2 jenis scope, global dan local
//setiap membuat function, kita membuat local scope utk function tsb
//data global scope bs diakses dari local scope
//sedangkan local scope tdk bs diakses dr global scope
//contoh penjelasan:

let counter=0; //ini global scope
function hitMe(){ //ini global scope
    console.log(`dipukul ${counter++}`); //ini local scope hitMe
}

function other(){ //ini global scope juga
    console.log("dipukul other"); //ini lokal scope
}
hitMe();
hitMe();
hitMe();

//contoh lain:
function first(){
   // let firstVar ="asalnya dari first";
}
let a=first;
console.log(a);
//---------------------

function pertamak(){
let vari1="pertamaks";
function firstNested(){
    console.log(`ini adalah ${vari1}`);
}
firstNested();
}
pertamak();

//atas bisa akses bawahnya (global bs akses local)
//-tetapi tidak sebaliknya. bawah tidak bs akses atasnya (local akses global)