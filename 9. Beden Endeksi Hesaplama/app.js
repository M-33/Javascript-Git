//TODO Beden Kitle Endeksi Hesaplama

let kilo = Number(prompt("Kilonuzu Giriniz : "));
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz :"));
let sonuc = kilo / (boy * 2);

if (sonuc < 18.5) {
  alert("Ideal kilonun altinda");
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
  alert("Ideal kiloda");
} else if (sonuc >= 25 && sonuc <= 29.9) {
  alert("Ideal Kilonun ustunde");
} else if (sonuc >= 30 && sonuc <= 39.9) {
  alert("Ideal kilonun cok ustunde (obez)");
} else if (sonuc >= 40) {
  alert("Ideal kilonun cok ustunde (morbid obez)");
}
