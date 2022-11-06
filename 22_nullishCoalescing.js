//nullish coalescing operator
//nullish value adalah null dan undefined
//nullish operator (??) adalah operator yang mirip dg ternary,
//yang membedakan adalah pada kondisi,
//jika bernilai null/ undefined, maka value default diambil
//menghindari adanya isian null / undefined, maka diganti nilai lain (default)

// dengan if
let paramet=null;
if (paramet=== undefined || paramet==null) {// atau (||)
    paramet="1. data bernilai undefined atau null" ;
}
console.log(paramet);

//dengan nullish coalescing
let a;
let cekparam = a ?? "2. data bernilai undefined atau null";
console.log(cekparam);
