/*
Benzin Istasyonu

Yakit metni;
1-Dizel
2-Benzin
3-Lpg

Gelen musteriden alacagimiz bilgiler;
1-Yakit tipi
2-Yuklenecek yakit litresi

? alt satira gecmek icin "\r\n" kullanilir...
Degisken atayip kullanmak daha kolay 

*/

let dizel = 24.53,
  benzin = 22.25,
  lpg = 11.1;
const yeniSatir = "\r\n";

const yakitMetni =
  "1-Dizel" +
  yeniSatir +
  "2-Benzin" +
  yeniSatir +
  "3-Lpg" +
  yeniSatir +
  "Yakit tipini seciniz";

let yakitTipi = Number(prompt(yakitMetni));
if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
  let yakitLitresi = Number(prompt("Yakit litresini giriniz"));
  let bakiye = Number(prompt("Bakiyenizi giriniz"));

  if (yakitTipi == "1") {
    let odenecekTutar = dizel * yakitLitresi;
    if (odenecekTutar < bakiye) {
      bakiye = bakiye - odenecekTutar;
      confirm(
        "Yakit alma islemi basarili" + yeniSatir + "Kalan Bakiye :" + bakiye
      );
    } else {
      confirm(
        "Bakiyeniz yeterli degildir!" +
          yeniSatir +
          "Odenecek Tutar : " +
          odenecekTutar +
          yeniSatir +
          "Bakiye : " +
          bakiye +
          yeniSatir +
          "Eksik Tutar : " +
          (odenecekTutar - bakiye)
      );
    }
  } else if (yakitTipi == "2") {
    let odenecekTutar = benzin * yakitLitresi;
    if (odenecekTutar < bakiye) {
      bakiye = bakiye - odenecekTutar;
      confirm(
        "Yakit alma islemi basarili" + yeniSatir + "Kalan Bakiye :" + bakiye
      );
    } else {
      confirm(
        "Bakiyeniz yeterli degildir!" +
          yeniSatir +
          "Odenecek Tutar : " +
          odenecekTutar +
          yeniSatir +
          "Bakiye : " +
          bakiye +
          yeniSatir +
          "Eksik Tutar : " +
          (odenecekTutar - bakiye)
      );
    }
  } else if (yakitTipi == "3") {
    let odenecekTutar = lpg * yakitLitresi;
    if (odenecekTutar < bakiye) {
      bakiye = bakiye - odenecekTutar;
      confirm(
        "Yakit alma islemi basarili" + yeniSatir + "Kalan Bakiye :" + bakiye
      );
    } else {
      confirm(
        "Bakiyeniz yeterli degildir!" +
          yeniSatir +
          "Odenecek Tutar : " +
          odenecekTutar +
          yeniSatir +
          "Bakiye : " +
          bakiye +
          yeniSatir +
          "Eksik Tutar : " +
          (odenecekTutar - bakiye)
      );
    }
  }
} else {
  alert("Lutfen gecerli bir yakit turu giriniz!");
}
