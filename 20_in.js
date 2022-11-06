//pengecekan properti(indeks dalam objek) didalam objek
//jika ada maka true
//selain object, array juga bisa dicek indeksny
//hanya cek ada atau tidak, bukan cek value nya
//meskipun properti atau indeks undefined atau null

const person = {
    firstName:"Eko", lastName:"Khaedy"
}
const hasil ="firstName" in person;//true
console.log(hasil);

const nama= [null,"kurni",null];
const hasil1= 0 in nama;//true karna hanya cek indeks 0 meskipun value=null
console.log(hasil);