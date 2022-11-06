//ternary operator adalah operator sederhana dr if statement
//ternary operator terdiri dr : kondisi yg dieval; jika true akan ambil nilai pertama;
//jika false maka ambil nilai kedua

//perbandingan if else dan ternary
//1. if else statemen
const nilai= 78;
if (nilai>=75) {
    console.log("selamat anda lulus"); //78>=75
} else {
    console.log("kurang pinter antum");
}

//2.ternary statement
const score=75;
const ucapan=score>=75 ? "selamat anda lulus" : "kurang pinter antum";
console.log(ucapan);