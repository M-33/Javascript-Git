//let a = Math.floor(105.5); //Math.floor sayiyi tam sayiya yuvarliyor...
//console.log(a);

let sayi = Number(prompt("Lutfen bir sayi giriniz:"));
let sonuc = true;

for (let i = 2; i < Math.floor(sayi / 2); i++) {
  if (sayi % i == 0) {
    //Asal degildir
    sonuc = false;
    break;
  }
}
if (sonuc) {
  alert(sayi + " asaldir .");
} else {
  alert(sayi + " asal degildir!");
}
