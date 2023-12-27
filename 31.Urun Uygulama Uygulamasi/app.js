let urun1 = {
  isim: "Acer Swift",
  kategori: "Teknoloji",
  fiyat: 6.219,
};

let urun2 = {
  isim: "Acer Nitro 5",
  kategori: "Teknoloji",
  fiyat: 15.475,
};
let urun3 = {
  isim: "Acer Gaming",
  kategori: "Teknoloji",
  fiyat: 13.999,
};

let urun4 = {
  isim: "Lenova V15",
  kategori: "Teknoloji",
  fiyat: 10.999,
};

let urun5 = {
  isim: "Lenova V14",
  kategori: "Teknoloji",
  fiyat: 13.999,
};

let urun6 = {
  isim: "Lenova Ideapad",
  kategori: "Teknoloji",
  fiyat: 4.51,
};

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];

let kullaniciUrunIsmi = prompt("Bir urun ismi giriniz");
let filtreliUrunler = [];

function filtreliUrunlerDoldur(urunler) {
  urunler.forEach(function (urun) {
    if (
      urun.isim
        .toLocaleUpperCase()
        .includes(kullaniciUrunIsmi.toLocaleUpperCase(), 0)
    ) {
      filtreliUrunler.push(urun);
      // console.log(alert(urun.isim));
      //console.log(urun.isim);
    }
  });
}

function filtreliUrunlerYazdir(urunler) {
  urunler.forEach(function (urun) {
    console.log("-------------------------------------------------------");
    console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
    console.log("-------------------------------------------------------");
  });
}

filtreliUrunlerDoldur(urunler);
filtreliUrunlerYazdir(filtreliUrunler);
