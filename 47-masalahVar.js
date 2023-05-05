/**
 * --- masalah penggunaan var --
 * sudah dijelaskan sebelumnya bahwa penggunaan var tidak direkomendasikan lg
 * sudah diganti dengan penggunaan let
 * hal ini dikarenakan var tidak memiliki block scope, hal ini mengakibatkan 
 * -var tidak bs diprediksi
 */
// --contoh pake let
let i=20; //global scope
for(let i=0;i<10;i++){ //i bersifat local scope karna di dalam block
    console.log(`local i : ${i}`);
}
console.info(`global i: ${i}`);
// --contoh pake var
var k=30;
for (var k=0;k<10;k++){ //seolah olah meng override k=30
    console.log(`lokal k: ${k}`);
}
console.info(`global k ${k}`); // tercetak 10
// sehingga hal ini tidak direkomendasikan menggunakan kata kunci var