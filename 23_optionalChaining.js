//optional chaining operator (?) merupakan operator yg dgunakan mengamankan
//ketika kita ingin akses properti objek dari data nullish
//jika kita akses properti dr objek dengan data nullish tanpa pakai
//optional chaining, maka akan terjadi error

//contoh akses objek yg ga ada isinya
const person={};
const alamat = person.address;
console.log(alamat); //error karna yang diakses tidak ada / undefined

//pengecekan dg if 

let oke;
if (person.address !== undefined && person.address!==null){
    oke=person.address.country;
}
console.log(oke);

//pengecekan dg optional chaining
let orang={alamat2 : "jakarta"};
let pengecekan=orang?.alamat2; //cek jika array orang dan indekx alamat2
//bukan null atau undefined
//bisa juga cek object dan properties
console.log(orang.alamat2);