//Todo break - continue

//!Break donguyu tamamen kirar
//?Break donguyu tamamen kirip yoluna devam etmez

//1- den 10 a kadar sayilari yazdiralim
//8'e geldigimizde donguden cikalim
//break bu isi yapmamizi saglar

//let sayac = 1;
//while (sayac <= 20) {
// console.log(sayac);
// if (sayac == 8) {
//  break;
//}
//sayac++;
//}


//?Continue donguyu tamamen kirmaz break gibi
//?Continue donguyu 1 kez kirar ve yoluna devam eder


let sayac = 0;
while (sayac <= 20) {
  sayac++;
  //if (sayac > 20) {
    //11 yazdirmasin diye bu if ekedim
   // break; //break ile 11 den itibaren kirdim bura olmazsa 21 de consolde gozukur
   //21 konsolda gozukmesin istiyorsam burayi eklerim.
  //}
  if (sayac == 8) {
    //8 yazdirmasin ve sonra devam etsin dedim
    continue; //continue ile 8 yazdirmadim ve devam etti kodum
  }
  console.log(sayac);
}
