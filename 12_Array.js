//array adalah kumpulan data
//sifat dinamis bs ditambah dikurangi
//berbeda dg java yang panjang array sudah didefinisi
//array seperti laci bs simpan bnyk data

let arrayKosong = [];
let arrayIsi = ["eko", 30, "laki"];
console.log(arrayKosong);
console.table(arrayIsi);

//urutan array dari 0
//nambah data array ditambahkan ke urutan trakhir
//urutan array disebut index

//menambah array dengan cara :
//namaArray.push(value)

let nama =[];
nama.push("jokowodok");
nama.push(669);
nama.push("jokriwodok");
console.table(nama);

//namaArray.length : panjang array
//namaArray[index] : liat data pada index ke-
//namaArray[index]=value : ubat isi data index ke-
//delete array[index] : hapus data index ke-, index
//tidak geser

nama[0]="stratos";
console.table(nama);
delete nama[0]; //index 0 ilang tp urutan tetep
console.table(nama);
console.log(nama.length); //panjang msh 3 meski diapus index 0

//data array isinya bebas
//bahkan array bisa masuk ke dalam array
//array dalam array = multidimensi array
