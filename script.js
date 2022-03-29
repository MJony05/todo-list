let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let btn__del = document.getElementsByClassName("todo");
let dels = document.getElementsByClassName("todo__btn");
let a = 0;
let row = 0;
let list = document.querySelector(".list");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  a = input.value;
  row = `<div class="todo">
  <p class="todo_text">${a}</p>
  <button class="todo__btn">Delete</button>
</div>`;
  list.insertAdjacentHTML("afterbegin", row);
  input.value = "";
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("todo__btn")) {
    e.target.parentElement.remove();
  }
});
