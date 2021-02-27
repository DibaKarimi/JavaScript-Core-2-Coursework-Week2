function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete all completed tasks";
  deleteBtn.className = "btn btn-primary";
  let parentDeleteBtn = document.getElementsByClassName("list-group");
  parentDeleteBtn[0].appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteAllCompletedTodos);
  todos.forEach((todo) => {
    addTodo(todo.task);
  });
}

function addTodo(task) {
  let ulElement = document.getElementById("todo-list");
  let liElement = document.createElement("li");
  liElement.className =
    "list-group-item d-flex justify-content-between align-items-center";
  liElement.textContent = task;
  liElement.style.textDecorationLine="none"
  let spanElement = document.createElement("span");
  spanElement.className = "badge bg-primary rounded-pill";
  let checkElement = document.createElement("i");
  checkElement.className = "fa fa-check";
  let trashElement = document.createElement("i");
  trashElement.className = "fa fa-trash";
  spanElement.appendChild(checkElement);
  spanElement.appendChild(trashElement);
  liElement.appendChild(spanElement);
  ulElement.appendChild(liElement);
  checkElement.addEventListener("click", function () {
    if (liElement.style.textDecorationLine === "line-through")
      liElement.style.textDecorationLine = "none";
    else liElement.style.textDecorationLine = "line-through";
  });
  trashElement.addEventListener("click", function () {
    liElement.remove();
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let addBtn = document.getElementsByClassName("btn-primary");
  //addBtn[0].addEventListener("click", function () {
  let task = document.getElementById("todoInput");
  if ((task.value === "")) alert("Please write your task");
  else {
    addTodo(task.value);
    task.value = "";
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let liElement = document.getElementsByTagName("li");
  let liElementCount = liElement.length;
  for (let i = 0,j=0; i < liElementCount;j++, i++)
    if (liElement[j].style.textDecorationLine === "line-through") {
      liElement[j].remove();
      j--;
    }
 
  }
