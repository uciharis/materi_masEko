//operator typeof digunakan utk melihat tipe data suatu variabel
//karna js ini dinamik, kita perlu mengecek tipe datanya

//tipe---------- hasil typeof

//undefined------ "undefined"
//null------ "object"
//boolean------ "boolean"
//number------ "number"
//BigInt------ "bigint"
//String------ "string"
//Symbol------ "symbol"
//Function------ "function"
//lainnya------ "object"

let data; //undefined
const typeData= typeof data;
console.log(typeData);

let data21={}; //object
const typeData21=typeof(data21);
console.log(typeData21);

let data31=[]; //object
const typeData31=typeof(data31);
console.log(typeData31);

let data1="eko"; //string
const typeData1= typeof data1;
console.log(typeData1);

let data2=123; //number
const typeData2=typeof(data2);
console.log(typeData2);

let data3=20e10; //number
const typeData3=typeof(data3);
console.log(typeData3);

let data4=true; //boolean
const typeData4=typeof(data4);
console.log(typeData4);