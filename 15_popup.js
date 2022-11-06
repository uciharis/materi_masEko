//JS punya fitur sbb:
//fitur ini hanya berjalann di browser not node.js
//a. alert, b. prompt, c. confirm
//alert digunakan memberi peringatan berupa popup text
//prompt digunakan utk meminta input string
//confirm digunakan untuk minta input boolean dr browser user
//---------- contoh prompt ---------
let nama =prompt("isikan namamu");
alert(`heloo ${nama}`); //run only at browser not in node

//--------------contoh confirm --------------
const masuk=confirm("yakin melanjutkan?");
if(masuk){
    const namaa=prompt("siapa nama mu?");
    alert(`halo ${namaa}`);
} else {
    alert("byee");
}
