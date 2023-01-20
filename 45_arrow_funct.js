//arrow function di objek
//arrow funct bisa digunakan sbg Object Method
//arrow funct tdk bs digunakan utk akses argumen objek, funct generator,
//- kata kunci this dan kata kunci super (dibahas di OOP)
//pastikan arrow funct hanya memang digunakan ketika tidak butuh fitur diatas
const person = {
    name: "eko",
    sayHello: (name) => {
        console.info(`hello ${name}`)
    }
};
person.sayHello("budi"); //output hello budi di anonimous function
// bandingkan dengan ini sblm menggunakan arrow function d objek
const parson = {
    nama: "ekoooo",
    sayHallo: function(nama){
        console.info(`hellauuu ${nama}`);
    }
};
parson.sayHallo("kuntjorooooo"); //output hellauuu kuntjoro 
// -alias sama dengan output objek diatas tanpa arrow function

//kata kunci this pada arrow function mengacu pada window
// sedang this pada anonimous function mengacu pada parent nya