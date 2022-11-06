//optional parameter
//secara default, parameter adalah pilihan, tidak wajib
//jika tdk ada value yang dikirim ke parameter, nilai nya akan undefined
function sayH(firstN, middleN, lastN){
    console.log(firstN);
    console.log(middleN);
    console.log(lastN);
}
sayH("ekooo");//tidak error namun undefined
sayH("aa","bb","cc","dd"); //dd tidak diconsole.log 