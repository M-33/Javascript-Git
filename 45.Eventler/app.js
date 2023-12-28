//EVENT (OLAY)



const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click", changeTitle);

function changeTitle(e) {
  console.log(e);
  console.log(e.target);
  console.log(e.type);
  console.log(e.target.className);
  console.log(e.target.id);
  console.log(e.target.tagName);
}
