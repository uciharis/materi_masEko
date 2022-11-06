//recursive function: kemampuan function memanggil dirinya sendiri
//ada problem yang lebih mudah diselesaikan dg recursive
//contoh
function faktorial(value){ //faktorial menggunakan loop
    let a=1;
    for(let i=1;i<=value;i++){
        a*=i;
    }
    return a;
}
console.log(faktorial(4));
console.log(1*2*3*4);
//--------------------
console.log("------------------------");
function recursive(value){ //faktorial menggunakan recursive
    if (value === 1){
        return 1;
    } else {
        return value * recursive(value-1);
    }
}
console.log(recursive(4));