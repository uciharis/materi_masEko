//secara default, function tdk menghasilkan value apapun
//agar menghasilkan value, kita gunakan return dalam function
//return diikuti dengan value yg ingin kita hasilkan
//function hanya bs mengembalikan 1 data, 
//utk mengembalikan beberapa data, gunakan array sbg return value
//contoh:
function sayH(firstN,lastN){
    const say=`hello ${firstN} ${lastN}`;
    return say;
}
const a=sayH("joko","dok");
console.log(a);

function getScore(value){
    if(value>90) {
        return `nilai ${value} = A`;
    } else if(value>80){
        return `nilai ${value} = B`;
    }else if(value>70){
        return `nilai ${value} = C`;
    }else if(value>60){
        return `nilai ${value} = D`;
    }else {
        return `nilai ${value} =goblok parah`
    }
}
let cek=getScore(77);
console.log(cek);

//return juga bs digunakan utk menghentikan eksekusi function
function isContain(array, cariValue){
    for (const element of array){
        if (element===cariValue){
            return `ada ${cariValue} di ${array}`;
        }
    }return `tidak ada ${cariValue} di ${array}`;
}
const b=isContain([2,3,4,3,2,3,4,3,2],3);
console.log(b);