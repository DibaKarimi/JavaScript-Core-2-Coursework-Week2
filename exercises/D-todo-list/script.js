function todoList(todos) {
  let ulElement = document.createElement("ul");
  for (let i = 0; i < todos.length; i++) {
    let liElement = document.createElement("li");
    let liText = document.createTextNode(todos[i].todo)
    liElement.style.textDecorationLine = "none";
    liElement.appendChild(liText);
    ulElement.appendChild(liElement);
    liElement.addEventListener("click", function () {
      let textDecoration = liElement.style.textDecorationLine;
      if (textDecoration === "none")
      {
        console.log(textDecoration);
        liElement.style.textDecorationLine = "line-through";
      }else if (textDecoration === "line-through")
        liElement.style.textDecorationLine = "none";
})
  }

  let contentElement = document.getElementById("content");
  contentElement.appendChild(ulElement);

}
const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);