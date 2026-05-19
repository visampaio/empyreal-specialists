const numPlayers = document.getElementById("numPlayers");
const startDiv = document.getElementById("startDiv");
const start = document.getElementById("startGame");
const specialistList = document.getElementById("specialistList");
const modal = document.getElementById("modal");
let gameDeck = [];
let removedDeck = [];
let cardInfo = document.getElementsByClassName("cardInfo");
let selectYes = document.getElementById("selectYes");

start.addEventListener("click", function() {
    createDeck(engineers);
    createDeck(surveyors);
    createDeck(stationMasters);
    createDisplay();
});

function createDeck(array) {
    let list = structuredClone(array);

    for (let i=0; i< Number(numPlayers.value)+1;) {
        let j = Math.floor(Math.random() * list.length);
        let cardPicked = list[j];
        if (!cardPicked.isBanned) {
            gameDeck.push(cardPicked);
            list.splice(j, 1);
            i++;
        }
    }
}

function createDisplay(){
    specialistList.innerHTML = displayDeck(gameDeck, "Engineers");
    specialistList.innerHTML += displayDeck(gameDeck, "Surveyors");
    specialistList.innerHTML += displayDeck(gameDeck, "Station Masters");
    startDiv.style.display = "none";
    for (let i=0; i < cardInfo.length; i++) {
        cardInfo[i].addEventListener("click", function() {
            modal.style.display = "block";
            selectYes.dataset.target = this.dataset.name;
        });
    }
    // Original code from https://www.w3schools.com/howto/howto_js_accordion.asp
    let accordions = document.getElementsByClassName("accordion");

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            for (let i = 0; i < accordions.length; i++) {
                accordions[i].style.display = "none";
            }
            let panel = this.nextElementSibling;
            toggleAccordion(panel);
        });
    }
}

function displayDeck(list, type) {
    let string = `<button class="accordion">${type}</button><div class="cardDisplay">`;
      for (let z=0; z < list.length; z++) {
        if (list[z].type == type) {
            string += `
        <div class="cardInfo" data-name="${list[z].name}"><img src=${list[z].src}><p>${list[z].desc}</p></div>`
        }
      }
      return string;
}

selectYes.addEventListener("click", function() {
    modal.style.display = "none";
    for (let i=0; i < gameDeck.length; i++) {
        if (gameDeck[i].name == this.dataset.target) {
            removedDeck.push(gameDeck[i]);
            gameDeck.splice(i, 1);
        }
    }
    createDisplay();
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

function toggleAccordion(panel){
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
}