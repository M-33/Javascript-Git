let yeniSatir = "\r\n";
let metin =
  "1-Pazartesi" +
  yeniSatir +
  "2-Sali" +
  yeniSatir +
  "3-Carsamba" +
  yeniSatir +
  "4-Persembe" +
  yeniSatir +
  "5-Cuma" +
  yeniSatir +
  "6-Cumartesi" +
  yeniSatir +
  "7-Pazar" +
  yeniSatir +
  "Lutfen bir sayi giriniz ; ";

let deger = prompt(metin);

switch (deger) {
  case "1":
    console.log("Pazartesi Gunu");
    alert("Pazartesi Gunu");
    break;
  case "2":
    console.log("Sali Gunu");
    alert("Sali Gunu");
    break;
  case "3":
    console.log("Carsamba Gunu");
    alert("Carsamba Gunu");
    break;
  case "4":
    console.log("Persembe Gunu");
    alert("Persembe Gunu");
    break;
  case "5":
    console.log("Cuma Gunu");
    alert("Cuma Gunu");
    break;
  case "6":
    console.log("Cumartesi Gunu");
    alert("Cumartesi Gunu");
    break;
  case "7":
    console.log("Pazar Gunu");
    alert("Pazar Gunu");
    break;

  default:
    console.log("Lutfen gecerli bir deger giriniz!");
    alert("Lutfen gecerli bir deger giriniz!");
    break;
}
