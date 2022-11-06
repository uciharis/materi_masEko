//falsy
//value yang konteks booleannya false
//berguna namun kdg membingungkan
//data yg dianggap falsy

// data ----------------- ket
//1. false ----------------- boolean false
//2. 0,-0 -----------------  false
//3. "",'',`` ----------------- string kosong false
//4. null -----------------  false
//5. undefined -----------------  false
//6. NaN -----------------  false

//truthy adalah kebalikan dr falsy
let data=[]//true meskipun objeknya kosong
if (data){
    console.log("true");
} else{
    console.log("false");
}