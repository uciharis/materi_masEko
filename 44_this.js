//this adalah sebuah metode mereferensi objek milik siapa
//dalam objek metode, this mereferensi ke objek pemilik functionnya
//global scope, this mereferensi ke global objek ( di browser biasanya ke Window)
//dalam function, this merefererensi ke global objek (di browser biasanya window)
//pada strict mode, this adalah undefined
//dalam event, this mereferensi ke elemen yang menerima event (materi DOM)

//this di global scope
console.log(this); //this merefer ke windows
function sempel(){
    console.log(this);

    function iner(){
        console.log(this);
    }
    iner();
}
sempel();

//-------------------------
//this di objek metod
const person= { //this refers ke objek
    nama: "eko",
    sayHi: function(value){
        console.log(`hello ${value} namaku adlah ${this.nama}`);
    }
};
person.sayHi("budi");
person.sayHi("jokorok");