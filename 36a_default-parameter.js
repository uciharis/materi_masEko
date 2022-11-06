//default parameter
//meskipun parameter itu opsional(boleh kosong) tapi kita bs memberikan
//nilai default jika parameternya tidak diisi atau isinya undefined
//contoh:
function register(nama, gender="N.A"){
    console.log(nama+" adalah "+gender);
}
register("jokowowok", "laki");
register("jokikok",false);