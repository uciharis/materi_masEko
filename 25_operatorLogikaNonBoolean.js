//ada operator logika
// AND(&&) dan OR (||)
//utk data boolean

//khusus JS, kita bs pakai
//AND dan OR utk tipe non boolean

//----------------------
//operator OR (||) di non boolean part.1
//membaca dr kiri ke kanan
//ambil nilai pertama yg truthy
//jika tidak ada satupun nilai truthy
//akan diambil data urutan trkhir(kanan)
//
//contoh :
console.log("hello" || ""); //ditampilkan yg truthy kiri
console.log(""||[]); //ditampilkan truthy kanan
console.log("0"||"NOL"); //dibaca dr kiri, meskipun sama2 truthy
console.log(0||"nol"); //diambil yang truthy, kanan
console.log(null||"NULL");//diambil truthy kanan
console.log(undefined||"undefined");//diambil truthy kanan
console.log(0||undefined);//dua falshy, diambil plg kanan(terakhir)
console.log("----------------------------");

const person ={name1:undefined,name2:"khannedy"};
const cekPerson = person.name1 || person.name2; //nonboolean
console.log(`1 ${cekPerson}`);
//nilai kosong, maka ambil truthy yg lain, yaitu kanan
//aktif dg prinsip truthy dan falsy
//mirip dengan nullish

//nullish
const a={firstName:undefined,lastName:"khannedy"};
const b=a.firstName??a.lastName;
console.log(`2 ${b}`); //nilai kosong tidak menghasilkan nilai
//nullish aktif saat nilai null atau undefined, maka diinisiasi value
//yang default
//hanya inisiasi dg null atau undefined
console.log("----------------------------");

//-----------------
//Operator AND (&&) di non boolean part.2
//membaca dr kiri ke kanan <sama dengan OR(||) >
//akan diambil nilai pertama yg falsy
//jika tidak ada yg bernilai falsy, maka diambil nilai terakhir
//
//contoh:
console.log("hello" && "");// ""
console.log("" && []); //""
console.log("0" && "nol"); //"nol" tidak ada falsy, ambil value kanan
console.log(0 && "nol"); //falsy pertama
console.log(null && "null"); //falsy pertama
console.log(undefined && "undefined"); //falsy pertama
console.log("undefined" && "null");  //tidak ada falsy, ambil paling kanan
console.log("------------------------------");
