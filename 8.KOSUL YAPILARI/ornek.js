/*

! vize 1 % 30
?vize  2 % 30

TODO final % 40
*/

let vize1 = Number(prompt("Vize 1 Notunuzu Giriniz:"));
let vize2 = Number(prompt("Vize 2 Notunuzu Giriniz"));

let final = Number(prompt("Final Notunuzu Giriniz"));

let avarage = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;

if (avarage >= 70) {
  alert("Sinavdan Gectiniz Tebrikler!" + " Ortalamaniz=" + avarage);
  console.log("Sinavdan Gectiniz Tebrikler!" + " Ortalamaniz=" + avarage);
} else {
  alert("Sinavdan Kaldiniz Uzgunum!" + " Ortalamaniz=" + avarage);
  console.log("Sinavdan Kaldiniz Uzgunum!" + " Ortalamaniz=" + avarage);
}
