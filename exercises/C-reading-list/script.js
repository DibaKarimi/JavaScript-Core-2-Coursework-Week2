function readingList(books,urls) {
  let contentElement = document.getElementById("content");
  contentElement.innerHTML = "<h1> Book List </h1>";
  let ulElement = document.createElement("ul");
  contentElement.appendChild(ulElement);
  for (let key in books) {
    let liElement = document.createElement("li");
    let pElement = document.createElement("p");
    let pText = document.createTextNode(books[key].title);
    pElement.appendChild(pText);
    let imgElement = document.createElement("img");
    if (books[key].alreadyRead === true)
      liElement.style.backgroundColor = "green"
    else liElement.style.backgroundColor = "red";
    liElement.style.width = "250px";
    imgElement.style.width = "150px";
    imgElement.style.height="200px"
    liElement.appendChild(pElement);
    liElement.appendChild(imgElement);
    imgElement.src = urls[key];
    ulElement.appendChild(liElement);
    
  };
  
}
const urls = [
  " https://product.hstatic.net/200000211451/product/745a29ac-2ab5-431c-9829-d92581914655_5c8a910dff1a499db3f39e4edb4da067_small.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41Z56GwEv9L._SX322_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41as%2BWafrFL._SR400,400_.jpg",
];
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books,urls);
