/* --- strict Mode ---
 * saat kita menjalankan kode program Javascript, secara default program
-kita berjalan dalam mode tidak strict (sloopy mode).
pada ECMAScript 5, diperkenalkan mode strict dimana ketika mode ini dijalankan,
maka akan mengubah beberapa cara kerja JS seperti :
- merubah beberapa JS error dari yang tadinya silent error menjadi throw error (terlihat)
- memperbaiki beberapa kesalahan engine JS utk dioptimasi
- menolak/blocked beberapa kode perintah yang sudah usang/tidak direkomen di ECMAscript
 */

//cara menyalakan strict mode
// tambahkan 'use strict' pada baris awal file JS atau di awal function
// -maka strict mode akan aktif di function tsb.
// penggunaan use strict diapit tanda petik 1
//contoh:
function useStrictMode(){
    //'use strict' //---> jika ini diaktifkan dg apus komen, maka code with akan error
    const person = {
        firstName: "eko"
    };
    with (person) { //with adalah kode obselete 
        console.log(firstName);
    }
};
useStrictMode() // output : SyntaxError: Strict mode code may not include a with statement