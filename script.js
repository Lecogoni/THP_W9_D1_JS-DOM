/// Fonctionnalité 1 et 1-bis :

let myFooter = document.getElementsByTagName("footer")[0];
clicNum = 0
myFooter.addEventListener("click", function(){ 
  clicNum ++;
  console.log(`clic numéro ${clicNum}`);
});

/// Fonctionnalité 2 :

let btnMenu = document.querySelector(".navbar-toggler span");
let burgerMenu = document.getElementById("navbarHeader");

let collapseMenu = false;

function menuToggle(){
  if (collapseMenu == false) {
    collapseMenu = true;
    burgerMenu.classList.remove("collapse");
  }
  else if (collapseMenu == true) {
    burgerMenu.classList.add("collapse");
    collapseMenu = false;
  }
}

btnMenu.onclick = menuToggle;

/// Fonctionnalité 3 :

let firstCardEdit = document.querySelectorAll(".btn-group button")[1];

function editColor(){
  document.querySelectorAll(".card .card-body .card-text")[0].style.color = "red";
}

firstCardEdit.onclick = editColor;

/// Fonctionnalité 4 :

let secondCardEdit = document.querySelectorAll(".btn-group button")[3];

let textStyle = "black"

function editColorToggle(){
  if (textStyle == "black"){
    document.querySelectorAll(".card .card-body .card-text")[1].style.color = "green";
    textStyle = "green";
  }
  else if(textStyle == "green"){
    document.querySelectorAll(".card .card-body .card-text")[1].style.color = "black";
    textStyle = "black";
  };
}

secondCardEdit.onclick = editColorToggle;

/// Fonctionnalité 5 :

let bootStrap = true;
let navBar = document.querySelectorAll(".navbar-dark")[0];
let bootstrapCdn = document.querySelectorAll("head link")[0];


navBar.addEventListener('dblclick', function (e) {
  if (bootStrap == true){
    bootstrapCdn.setAttribute("href", "");
    bootStrap = false;
  }
  else if(bootStrap == false){
    bootstrapCdn.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    bootStrap = true;
  };
});

/// Fonctionnalité 6 :


let card = document.getElementsByClassName("col-md-4");
let cardView = document.getElementsByClassName("btn-success");
let cardText = document.getElementsByClassName("card-text");


for (let i = 0; i < card.length; i++) {
  cardView[i].addEventListener("mouseenter", function(){ 
    console.log(card[i]);
    if (card[i].offsetWidth == "100%"){ 
      console.log("none");
      //card[i].width = "20%";
      //cardText[i].style.display = "none";

    } else if (card[i].width == "20%") {
      console.log("block");
      //card[i].width = "inherit";
      //cardText[i].style.display = "block";

    };
  });

}

/// Fonctionnalité 7 :

let greyButton = document.getElementsByClassName("btn-secondary")[0];
let rowDiv = document.getElementsByClassName("row")[1];


greyButton.addEventListener("click", function(){ 
  let lastCard = document.getElementsByClassName("row")[1].lastElementChild;
  rowDiv.insertBefore(lastCard, rowDiv.firstChild);
});

/// Fonctionnalité 8 :

let blueButton = document.getElementsByClassName("btn-primary")[0];
console.log(blueButton);

blueButton.addEventListener("click", function(event){ 
  event.preventDefault();
  let firstCard = document.getElementsByClassName("row")[1].firstElementChild;
  console.log(firstCard);
  firstCard.parentNode.appendChild(firstCard);
});