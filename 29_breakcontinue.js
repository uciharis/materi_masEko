//break n continue
//pada switch statement, break digunakan utk menghentikan perulangan total
//untuk continue, digunakan utk menghentikan perulangan saat ini
//dan melanjutkan ke statemen selanjutnya.
//contoh break:
let counter=1;
while(true){
    console.log(`perulangan ke-${counter}`);
    counter++;
    if (counter>10){
        break;
    }
}

for (let i=1;i<20;i++){
    if(i%2===0){
        continue;
    }
    console.log(`bilangan ganjil ke-${i}`);
}