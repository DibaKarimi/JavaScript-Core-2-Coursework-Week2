function shoppingList(shopping) {
  let divContent = document.getElementById("content");
  let ulElement = document.createElement("ul");
  for (let i = 0; i < shopping.length; i++){
    let liElement = document.createElement("li");
    let liText = document.createTextNode(shopping[i]);
    
    liElement.appendChild(liText);
    ulElement.appendChild(liElement);
  }
  divContent.appendChild(ulElement);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
