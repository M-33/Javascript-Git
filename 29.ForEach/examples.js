let students = [
  { isim: "Alice", not: "A" },
  { isim: "Bob", not: "B" },
  { isim: "Charlie", not: "C" },
];

students.forEach(function (student) {
  console.log(student.isim + "-" + student.not);
});
console.log("----------------------------------------------------");

let scores = [12, 70, 99, 100, 1000];

scores.forEach(function (score) {
  if (score === 100) {
    console.log(score);
  }
});

const fruits = ["apple", "orange", "cherry"];
fruits.forEach(function (meyve) {
  console.log(meyve);
});
