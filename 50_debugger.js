/**
 * --debugger --
 * digunakan utk melakukan proses debugging
 * adalah proses mencari bug yang terjadi pada kode program kita
 * fitur debugger adalah bawaan dari browser bukan dr javascriptnya.
 * debugger bs menghentikan kode program di posisi yang kita inginkan (breakpoint)
 * -lalu kita ingin melihat semua isi variable yang ada pada saat kode program berhenti.
 */
// contoh :
function createFullName(firstName, middleName, lastName){
    debugger;
    const fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
const name = createFullName("joko", "kowi", "widodo");
console.log(name);

//kode ke-2
function sum(...numbers){
    debugger;
    let total=0;
    for(number of numbers){
        total=total+number;
    }
    return total;
}
console.log(sum(1,2,3));