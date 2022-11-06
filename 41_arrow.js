//alternatif pembuatan function yg lbh sederhana
//namun ada limitasi dan tdk bs digunakan d smua situasi
//dinamakan arrow karna pakai tanda panah =>
//kekurangan arrow function:
//-tidak punya argumen objek, -tdk bs pake function generator
//-tdk bs akses this, -tdk bs akses super
const sayHello=(name) => { //arrow dg block
    const say=`helloou ${name}`;
    console.log(say);
}
sayHello("madafakaaa");

//arrow function sederhana misal 1 baris maka dapat dibuat tanpa block
const sayHollo=(nama)=> console.log(`halou ${nama}`); //tanpa block
sayHollo("jokolodok");

//arrow function bs mengembalikan value atau return value
//jika pake block maka perlu return value
//jika tdk pake block, tidak perlu return value
const sum= (a,b)=> console.log(a+b); //karna tidak pake blok, tanpa keyword return
sum(1,3);
//jika parameter cm 1, tidak usah pake tanda kurung
const sayHi=nama=> console.log(`helo ${nama}`); //parameter 1 bs tanpa kurung
sayHi("mulkojoko");
//---------
console.log("-----------------");
//arrow sbg parameter
//contoh:
function giveNama(callback){
    callback("ekooo");
}
giveNama((nama)=>console.log(`helooo ${nama}`));
//arrow function dilempar ke parameter