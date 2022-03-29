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
  //   row = `<div class="todo">
  //   <p class="todo_text">${a}</p>
  //   <button class="todo__btn">Delete</button>
  // </div>`;
  //   list.insertAdjacentHTML("afterbegin", row);
  let element = document.createElement("div");
  element.classList.add("todo");
  let elementText = document.createElement("p");
  elementText.classList.add("todo_text");
  elementText.textContent = a;
  let elementBtn = document.createElement("button");
  elementBtn.classList.add("todo__btn");
  elementBtn.textContent = "Delete";
  element.append(elementText);
  element.append(elementBtn);
  list.prepend(element);
  input.value = "";
  elementBtn.addEventListener("click", function (e) {
    element.remove();
  });
});
