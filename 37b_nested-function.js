//function in function
//function yg ada didalam function disebut inner function
//inner function hanya bs diakses di dalam function luarnya. tidak bs
//-dipanggil diluar itu
function outer(){
function inner(){
    console.log("innneeeer");
}
inner();
outer();
}
//inner(); tidak bs panggil inner di luar
outer(); //function outer bs dipanggil