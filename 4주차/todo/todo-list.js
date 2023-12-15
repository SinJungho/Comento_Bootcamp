document.getElementById("addTodoBtn").addEventListener("click", function () {
  var value = document.getElementById("todoInput").value;
  if (value) {
    addItem(value);
    document.getElementById("todoInput").value = "";
  }
});

function addItem(text) {
  var list = document.getElementById("todo__menu");

  var item = document.createElement("li");
  item.innerText = text;

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteItem(item);
  });

  item.appendChild(deleteButton);

  list.appendChild(item);
}

function deleteItem(item) {
  var list = document.getElementById("todo__menu");
  list.removeChild(item);
}
