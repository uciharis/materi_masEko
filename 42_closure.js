//closure : kombinasi function dan bundel referensi ke data sekitar
//local scope tdk bs diakses di luar scope
//dg kemampuan closure, kita bs membuat sbuah function di local scope dan referensi
//ke data sekitar local scope, keluar dr scope nya
function createAdder(value){
    const owner="eko";
    function add(par){
        console.log(owner);
        return value+par;
    }
    return add;
}
const cetak=createAdder(10);
console.log(cetak(2));