//tipe data objek, ada properti di dalam objek
//function bs ditambahkan sbg properti dlm objek
//function di dalam objek disebut objek method
//contoh:
const person= { //function ke dalam objek
    nama: "eko",
    sayHalo: function (nama){ //anonymous function
        console.log(`hellllo ${nama}`);
    }
}; //titik koma karena ini objek
person.sayHalo("budi");

//kebalikan diatas, ini metod dimasukkin ke objek
const orang= {
    namo: "jokorowi"
};
orang.sayHai=function (namo) {
    console.log(`punten ${namo}`);
};
orang.sayHai('jokolowi');