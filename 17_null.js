//null merupakan data kosong
//null tidak sama dengan undefined.
//null variablenya ada value, value nya null
//undefined variabelnya blm ditambahkan value

let firstName //= null;
if(firstName===undefined){
    console.log("ini undefined");
} else if(firstName===null) {
    console.log("ini null");
} else {
    console.log(`helo ${firstName}`);
}