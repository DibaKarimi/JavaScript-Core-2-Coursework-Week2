function listOfColours(colours) {
  let selElement = document.createElement("select");
  let pElement = document.createElement("p");
  for (let i = 0; i < colours.length; i++) {
    let optionElement = document.createElement("option");
    optionElement.value = colours[i];
    optionElement.text = colours[i];
    selElement.appendChild(optionElement);
  }
    selElement.addEventListener("click", function () {
      pElement.innerHTML = "You have selected: " + this.value;
      console.log(pElement.text);
      pElement.style.color = this.value;
    });
    let contentElement = document.getElementById("content");
    contentElement.appendChild(selElement);

    contentElement.appendChild(pElement);
  
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
