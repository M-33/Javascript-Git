let h = 5;
let j = Number("10");
console.log(typeof j);
let k = Number(h + j);
console.log(k);

let m = "10";
console.log(typeof m);
console.log(m);

let n = Number("10");
console.log(typeof n);
console.log(n);

let a = 8;
let b = parseInt("12");
console.log(a + b + "///");

let c = 12;
let d = parseFloat("12.3");
console.log(c + d + "*******");

let x = 55;
console.log(typeof x + "-----------");
console.log(x);

let y = String(55);
console.log(typeof y + "---------");
console.log(y);

let z = (55).toString();
console.log(typeof z + "-----------");
console.log(z);

let u = Number("B");
console.log(u + "--------------");
//NaN = Not a Number = Bir sayi degil
let sayilar = Number([1, 2, 3, 4, 5]);
console.log(typeof sayilar);
console.log(sayilar + "+++++++++++");
//NaN = Not a Number = Bir sayi degil (Array)

let rakamlar = [1, 2, 3, 4, 5];
console.log(typeof rakamlar);
console.log(rakamlar);

//yukardaki rakamlar object normalde bunu simdi Stringe cevirmeye bakalim
let rakamlar1 = String([1, 2, 3, 4, 5]);
console.log(typeof rakamlar1);
console.log(rakamlar1);
