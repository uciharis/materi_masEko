//rest parameter
//adalah fitur bisa mengirim data sebanyak banyak pada satu parameter
//-dan secara otomatis dikonversi jd array
//rest parameter hanya ada 1 di function
//rest parameter hany boleh di posisi plg akhir, tdk boleh depan/ tengah
//contoh:
function sum(name, ...data){
    let total=0;for(const item of data) {
        total=total+item;
    }
    console.log(`total ${name} is ${total}`);
}
sum("jokolowi",2,3,4,3,4,5,6,5,6,4,3,3);
sum("jambu klutuk",12,23,44,32,34,32,23,45);

//spread syntax
//digunakan tuk mrubah data array menjadi rest parameter
//misal kita punya array mau dimasukkin ke rest parameter
//jambuKlutuk=[12,34,3,455,45,43]
const jambuKlutuk=[12,34,3,455,45,43];
sum("ini klutuk dalam aray",jambuKlutuk); //rest parameter tidak bs 
//menjumlah dg function sum si array scr langsung.
//-maka dr itu digunakan spread syntax
//contoh penggunaan:
sum("pake spread syntax",...jambuKlutuk);//arraynya bisa dikirim ke rest parameter

