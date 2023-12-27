let sinav = Number(prompt("Yasinizi giriniz : "));

function kontrolEt(yas) {
  if (yas >= 18) {
    alert("Ehliyeti alabilirsiniz");
    console.log("Ehliyeti alabilirsiniz");
  } else {
    alert("Ehliyeti alamazsiniz");
    console.log("Ehliyeti alamazsiniz");
  }
}
kontrolEt(sinav);
