/* 
TODO Burada kosullar sagliyorsa hepsini calistirir
? COKLU IF KULLANMAK

if (condition) {
    
}

if (condition) {
    
}

if (condition) {
    
}
*/

let ad1 = prompt("Isminizi giriniz : ");
let tckn = prompt("Tc numaranizi giriniz :");

kontrolEt1(ad1, tckn);

function kontrolEt1(ad1, tckn) {
  if (ad1 == "") {
    console.log("Lutfen isim alanini bos birakmayiniz!!!");
    return;
  }

  if (tckn.length != 11) {
    console.log("Lutfen tc nizi 11 karakter olarak giriniz");
    return;
  }

  console.log("Isim ve tc problemsiz girildi");
}
