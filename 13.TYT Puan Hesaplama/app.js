/*
?SORULAR
1-Turkce 40 --- sorular 4 olsun
2-Matematik 40
3-Sosyal Bilimler 20
4-Fen Bilimleri 20
 ===>100 Puan OSYM versin
 ===>Okul puani max 60 veriyor


*/

let yeniSatir = "\r\n";

let turkceDogru,
  turkceYanlis = 0;
let matematikDogru,
  matematikYanlis = 0;
let sosyalDogru,
  sosyalYanlis = 0;
let fenDogru,
  fenYanlis = 0;
let okulPuani = 0;

let mesaj =
  "TYT Puan Hesaplama uygulamasina hosgeldiniz!" +
  yeniSatir +
  "1-Puan Hesapla" +
  yeniSatir +
  "2-Cikis Yap";
//alert(mesaj);

let secim = prompt(mesaj);

switch (secim) {
  case "1":
    okulPuani = Number(prompt("Lutfen okul puaninizi giriniz : "));
    turkceDogru = Number(prompt("Turkce dogru sayinizi giriniz : "));
    turkceYanlis = Number(prompt("Turkce yanlis sayinizi giriniz : "));

    matematikDogru = Number(prompt("Matematik dogru sayinizi giriniz : "));
    matematikYanlis = Number(prompt("Matematik yanlis sayinizi giriniz : "));

    sosyalDogru = Number(prompt("Sosyal Bilgiler dogru sayinizi giriniz : "));
    sosyalYanlis = Number(prompt("Sosyal Bilgiler yanlis sayinizi giriniz : "));

    fenDogru = Number(prompt("Fen Bilgisi dogru sayinizi giriniz : "));
    fenYanlis = Number(prompt("Fen Bilgisi yanlis sayinizi giriniz"));

    let DogruSoruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
    let YanlisSoruSayisi =
      turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;

    let NetSayisi = DogruSoruSayisi - YanlisSoruSayisi / 4;
    let puan = NetSayisi * 4 + 100 + okulPuani;
    alert("TYT Puaniniz : " + puan);

    break;
  case "2":
    alert("Uygulamadan cikis yapildi");
    break;
  default:
    alert("Lutfen gecerli aralikta deger giriniz!");
    break;
}
