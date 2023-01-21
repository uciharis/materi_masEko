/**
 * --getter dan setter --
 * kemampuan membuat function yang berbeda utk mengambil data (getter)
 * dan mengubah data (setter) pada sebuah property di object.
 * dengan menggunakan getter dan setter kita bisa melakukan hal apapun pada funct
 * sebelum sebuah property diakses atau diubah. misal menambah validasi dll
 * 
 */
const person = {
    firstName: "ekoo",
    lastName: "kurniawan",
    get fullName(){  //fungsi get dengan properti tanpa parameter
        return `${this.firstName} ${this.lastName}`; //this mengacu ke objek skrg
    },
    set fullName(val){ //fungsi set dengan 1 parameter
        const array= val.split(" "); //simpan nilai fullName ke val utk dsplit
        this.firstName = array[0];
        this.lastName = array[1];
    }
}
//otomatis memanggil get fullName()
person.fullName = "jok owiee"
console.log(person.fullName);
console.table(person);
