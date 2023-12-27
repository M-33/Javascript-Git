let metin = "Sittingbourne' de javascript calisiyorum";

let harf = prompt("Harfi giriniz");

let sonuc = bul(harf);
alert("Harf sayisi : " + sonuc);

function bul(harf) {
  let toplam = 0;
  for (let i = 0; i < metin.length; i++)
    if (metin.charAt(i).toLowerCase() === harf) {
      toplam += 1;
    }
  return toplam;
}
