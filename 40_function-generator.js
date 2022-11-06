//function generator untuk membuat data generator
//generator adalah data yg bisa dditerasi seperti array
//perlu menggunakan tanda bintang setelah kata function
//utk mengembalikan data tiap iterasi, gunakan kata kunci yield
function* createNames(){
    yield "eko";
    yield "kurniawan";
    yield "khannedu";
}

const nama=createNames();
for (const nam of nama){
    console.log(nam);
}
//--------------
console.log("----------------");
function* ganjil(value){
    for (let i=1;i<=value;i++) {
        if(i%2===1){
            yield i;
        }
    }
}
const nomor=ganjil(30);
for (const no of nomor) {
    console.log(no);
}

//generator sifatnya lazy, asalkan data nya ditarik atau dipanggil ktika dibutuhkan
