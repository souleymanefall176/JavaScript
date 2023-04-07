var add = document.getElementById("addToDo");
var container = document.getElementById("container");

add.addEventListener("click", () => {
  if (inputField.value != "") {
    var paragraph = document.createElement("p");
  }
  paragraph.innerText = inputField.value;
  container.appendChild(paragraph);
  inputField.value = "";
  paragraph.classList.add("paragraph");
  paragraph.addEventListener("click", () => {
    paragraph.classList.add("paragraph_click");
  });
  paragraph.addEventListener("dblclick", () => {
    container.removeChild(paragraph);
  });
});
