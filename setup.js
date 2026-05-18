const numPlayers = document.getElementById("numPlayers");
const startDiv = document.getElementById("startDiv");
const start = document.getElementById("startGame");
const engineerList = document.getElementById("engineerList");
const surveyorList = document.getElementById("surveyorList");
const stationMasterList = document.getElementById("stationMasterList");
const modal = document.getElementById("modal");
let cardInfo = document.getElementsByClassName("cardInfo");
let selectYes = document.getElementById("selectYes");

start.addEventListener("click", function() {
    engineerList.innerHTML = displayDeck(createDeck(engineers));
    surveyorList.innerHTML = displayDeck(createDeck(surveyors));
    stationMasterList.innerHTML = displayDeck(createDeck(stationMasters));
    startDiv.style.display = "none";
    for (let i=0; i < cardInfo.length; i++) {
        cardInfo[i].addEventListener("click", function() {
            modal.style.display = "block";
            selectYes.dataset.target = this.dataset.name;
        });
    }
});

function createDeck(list) {
    let pickedList = [];

    for (let i=0; i< Number(numPlayers.value)+1;) {
        let j = Math.floor(Math.random() * list.length);
        let cardPicked = list[j];
        if (!cardPicked.isBanned) {
            pickedList.push(cardPicked);
            list.splice(j, 1);
            i++;
        }
    }

    return pickedList;
}

function displayDeck(list) {
    let string = "";
      for (let z=0; z < list.length; z++) {
        string += `
        <div class="cardInfo" data-name="${list[z].name}"><img src=${list[z].src}><p>${list[z].desc}</p></div>`
      }
      return string;
}

selectYes.addEventListener("click", function() {
    modal.style.display = "none";
    for (let i=0; i < cardInfo.length; i++) {
        if (cardInfo[i].dataset.name == this.dataset.target) {
            let panel = cardInfo[i].parentElement;
            toggleAccordion(panel);
            cardInfo[i].remove();
        }
    }
});

document.getElementById("selectNo").addEventListener("click", function() {
    modal.style.display = "none";
})

// Code from https://www.w3schools.com/howto/howto_css_modals.asp
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

// Original code from https://www.w3schools.com/howto/howto_js_accordion.asp
let accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    toggleAccordion(panel);
  });
} 

function toggleAccordion(panel){
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
}