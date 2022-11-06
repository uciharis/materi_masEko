//misalkan user input string
//tetapi kita perlu mengelola dlm bentuk number
//perlu dikonversi

let value1="1";
let value2=1;
let jumlah = value1+value2;
console.log(jumlah); // string ketemu number jd string

//fungsi konversi
//parseInt() : konversi string ke number bulat
//parseFloat() : konversi string ke number pecahan
//Number() : konversi string ke number pecah/bulat
//number.toString() : konversi number ke string

let jumlah1=value2+parseInt(value1); //1+parseInt("1")
console.log(jumlah1);

//NaN : (not a Number)
//terjadi ketika konversi string yang bukan number
let aa="joko";
let aaa=parseInt(aa);
console.log(aaa); //NaN
//parseInt dan parseFloat bisa mentolerir jika masih
//terdapat number pada variabel
//jika didahului hruf baru angka maka NaN
let bb="12jokodok";
let cc="j012kodok";
let bbb=parseInt(bb);
let bbbb=parseFloat(bb);
let ccc=parseFloat(cc);
console.log(bbb); //12jokodok dikonvert jd 12
console.log(bbbb); //sama dengan parseInt
console.log(ccc); //NaN karena ada string didepan

//isNaN() : untuk mengecek number atau bukan
//isinya true atau false

let cekisnan=isNaN(ccc);
console.log(cekisnan); //true karena ccc NaN