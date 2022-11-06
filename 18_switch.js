//switch adalah statement percabangan yang sama dg if
//namun lbh sederhana
//kondisi switch hanya utk perbandingan ==
//else pada switch adalah default

const nilai="G";
switch (nilai) {
    case "A":
        console.log("Anda lulus");
        break;
    case "B":
    case "C":
        console.log("Anda lulus");
        break;
    case "D":
        console.log("Anda tidak lulus");
        break;
    default:
        console.log("goblok sekali anda")
}