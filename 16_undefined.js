//salah satu kata kunci di JS
//tidak bs bikin variabel dg nama undefined
//undefined adalah sbuah tipe data
//undefined adalah kondisi variabel yang blm diberi nilai
//undefine tidak sama dengan null

//undefined variabel
let nama ; //sama dengan  nama=undefined
if (nama=== undefined){
    console.log("undefined");
} else {
    console.log("defined");
}
//undefined array
const namas = ["ko", "nu"];
if(namas[2]===undefined){ //indeks 2 tidak ada nilai
    console.log("array undefined");
}else {
    console.log("array defined");
}

//undefined object
const person={name:"muldoko", jk:"laki"};//properti name ada
if(person.name===undefined){
    console.log("object undefined");
} else{
    console.log("object defined");
}