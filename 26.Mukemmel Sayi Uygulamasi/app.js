//Mukemmel Sayi

//6
//6 = 1,2,3,6 = 1+2+3+6=12 ===> sayinin bolenler toplami
//kendisinin iki kati ise mukemmel sayi olur...

//28 = 1,2,4,7,14,28 = 1+2+4+7+14+28 ===>56 ===> 28*2=56

isPerfectNumber(15);

function isPerfectNumber(number) {
  let toplam = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      toplam += i;
    }
  }
  toplam += 1 + number;
  if (toplam == number * 2) {
    console.log("Mukemmel Sayidir...");
  } else {
    console.log("Mukemmel Sayi Degildir...");
  }
}
