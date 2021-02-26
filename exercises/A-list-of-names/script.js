function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (let i = 0; i < arrayOfPeople.length; i++) {
    let elem1 = document.createElement("h1");
   let elemText = document.createTextNode(arrayOfPeople[i].name);
    // elem1.innerHTML = arrayOfPeople[i].name;
    elem1.appendChild(elemText);
    content.appendChild(elem1);
    let elem2 = document.createElement("h2");
    elemText = document.createTextNode(arrayOfPeople[i].job);
   // elem2.innerHTML = arrayOfPeople[i].job;
    elem2.appendChild(elemText);
    content.appendChild(elem2);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
