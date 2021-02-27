let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
let jumbotronElm = document.getElementsByClassName("jumbotron");
let donateElm = document
  .getElementsByClassName("buttons")[0]
  .getElementsByClassName("btn-primary");
let volunteer = document.getElementsByClassName("btn-secondary");

blueBtn.addEventListener("click", function () {
  jumbotronElm[0].style.background = "#588fbd";
  donateElm[0].style.background = "#ffa500";
  volunteer[0].style.background = "black";
  volunteer[0].style.color = "white";
});

orangeBtn.addEventListener("click", function () {
  jumbotronElm[0].style.background = "#f0ad4e";
  donateElm[0].style.background = "#5751fd";
  volunteer[0].style.background = "#31b0d5";
  volunteer[0].style.color = "white";
});

greenBtn.addEventListener("click", function () {
  jumbotronElm[0].style.background = "#87ca8a";
  donateElm[0].style.background = "black";
  volunteer[0].style.background = "8c9c08";
});
function isValid(element, char) {
  return element.value.length > 0 && element.value.includes(char);
}
let submitBtn = document
  .getElementsByTagName("form")[0]
  .getElementsByClassName("btn-primary");
submitBtn[0].addEventListener("click", function (e) {
  e.preventDefault();
  let emailElm = document.getElementById("exampleInputEmail1");
  let nameElm = document.getElementById("example-text-input");
  let describeElem = document.getElementById("exampleTextarea");
  emailElm.style.backgroundColor = "white";
  nameElm.style.backgroundColor = "white";
  describeElem.style.backgroundColor = "white";
  let isValidEmail = isValid(emailElm, "@");
  let isValidName = isValid(nameElm, "");
  let isValidDes = isValid(describeElem, "");
  if (!isValidEmail) emailElm.style.background = "red";
  if (!isValidName) nameElm.style.background = "red";
  if (!isValidDes) describeElem.style.background = "red";
  if (isValidEmail && isValidName && isValidDes)
    alert("Tank you for filling out the form");
});
