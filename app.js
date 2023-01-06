// console.log("Hello World")

// let a = 4;
// let b = 2;

// let kali = a * b;
// let bagi = a / b;
// let tambah = a + b;
// let kurang = a - b;
// let modulus = a % b;
// //let pangkat = a ** b;
// let pangkat = Math.pow(a,b);

// console.log(kali)
// console.log(bagi)
// console.log(tambah)
// console.log(kurang)
// console.log(modulus)
// console.log(pangkat)

function cekNilai() {
    let nilai = document.getElementById("nilai").value;

    if (nilai == "") {
        document.getElementById("hasil").innerHTML = "";
    } else {
        let alfabet = "";
        if (nilai >= 81 && nilai <= 100) {
            alfabet = "A";
        } else if (nilai >= 61 && nilai <= 80) {
            alfabet = "B";
        } else if (nilai >= 41 && nilai <= 60) {
            alfabet = "C";
        } else if (nilai >= 20 && nilai <= 40) {
            alfabet = "D";
        } else if (nilai < 20) {
            alfabet = "E";
        }
        document.getElementById("hasil").innerHTML =
            "Anda mendapatkan nilai " + alfabet + ".";
    }

    return false;
}

/*
Jika nilai 81-100 : Anda mendapatkan nilai A.
Jika nilai 61-80 : Anda mendapatkan nilai B.
Jika nilai 41-60 : Anda mendapatkan nilai C.
Jika nilai 20-40 : Anda mendapatkan nilai D.
Jika nilai < 20 : Anda mendapatkan nilai E.
*/
