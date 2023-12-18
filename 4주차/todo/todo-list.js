document.getElementById("addTodoBtn").addEventListener("click", function () {
  const value = document.getElementById("todoInput").value;
  if (value) {
    addItem(value);
    document.getElementById("todoInput").value = "";
  }  else if (value == "") {
    alert(`할 일을 입력해주세요.`);
  }
});

function addItem(text) {
  const list = document.getElementById("todo__menu");
  const item = document.createElement("li");
  item.innerText = text;

  const deleteButton = document.createElement("button");

  // 삭제 버튼 style 설정
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.style.fontSize = "1.3rem";
  deleteButton.style.color = "red";
  deleteButton.style.backgroundColor = "white";
  deleteButton.style.width = "100px";
  deleteButton.style.height = "40px";
  deleteButton.style.borderColor = "red";
  deleteButton.style.borderRadius = "20px";
  deleteButton.style.marginBottom = "1.5rem";
  deleteButton.style.marginLeft = "3rem";
  deleteButton.style.fontFamily = "'Noto Sans KR', 'Noto Sans', sans-serif";
  
  // 삭제 event
  deleteButton.addEventListener("click", function () {
    deleteItem(item);
  });

  item.style.fontSize = "1.3rem";
  item.style.fontFamily = "'Noto Sans KR', 'Noto Sans', sans-serif";
  // item.style.marginRight = "2.4rem";

  item.appendChild(deleteButton);

  list.appendChild(item);
}

function deleteItem(item) {
  const list = document.getElementById("todo__menu");
  list.removeChild(item);
}
