let donenDeger = cube(2);
console.log("Sayinin Kubu: " + donenDeger);

function cube(sayi) {
  let sonuc = sayi * sayi * sayi;
  return sonuc;
}

function kare(sayi) {
  let sonuc = sayi * sayi;
  return sonuc;
}
console.log("Sayinin Karesi: " + kare(11));

function topla(a, b) {
  return a + b;
}
console.log("Sayilarin Toplami: " + topla(4, 3));

function cikar(a, b) {
  return a - b;
}
console.log("Sayilarin Cikarilmasindan Kalan: " + cikar(8, 10));

function carp(a, b) {
  return a * b;
}
console.log("Sayilarin Carpimi : " + carp(5, 4));

function bolme(a, b) {
  return a / b;
}
console.log("Sayilarin Bolumunden elde edilen bolum: " + bolme(102, 2));
console.log(bolme(303, 2));
