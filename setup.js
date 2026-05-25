const numPlayers = document.getElementById("numPlayers");
const startDiv = document.getElementById("startDiv");
const settingsDiv = document.getElementById("settingsDiv");
const start = document.getElementById("startGame");
const settings = document.getElementById("setSettings");
const specialistList = document.getElementById("specialistList");
const modal = document.getElementById("modal");
const endGame = document.getElementById("endGame");
let gameDeck = [];
let removedDeck = [];
let cardInfo = document.getElementsByClassName("cardInfo");
let selectYes = document.getElementById("selectYes");
let aggroLevel = document.getElementById("aggroLevel");

if (localStorage.getItem("gameDeck") !== null) {
    gameDeck = JSON.parse(localStorage.getItem("gameDeck"));
    removedDeck = JSON.parse(localStorage.getItem("removedDeck"));
    createDisplay();
    document.getElementById("endGameDiv").style.display = "block";
}

start.addEventListener("click", function() {
    createDeck(engineers);
    createDeck(surveyors);
    createDeck(stationMasters);
    createDisplay();
    document.getElementById("settingsDiv").style.display = "none";
    document.getElementById("endGameDiv").style.display = "block";
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
            document.getElementById("cardName").textContent = this.dataset.name;
            document.getElementById("cardDesc").textContent = this.dataset.desc;
        });
    }
    localStorage.setItem("gameDeck", JSON.stringify(gameDeck));
    localStorage.setItem("removedDeck", JSON.stringify(removedDeck));
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

    document.getElementById("oops").innerHTML = "";
    if (removedDeck.length >= 1) {
        document.getElementById("oops").innerHTML +=`<span  class="accordion" onclick="goBack();">🙊 ${removedDeck.length}</span>`;
    }
}

function displayDeck(list, type) {
    let string = `<button class="accordion"><img src="./img/${type.toLowerCase()}_logo.png">${type}</button><div class="cardDisplay">`;
      for (let z=0; z < list.length; z++) {
        if (list[z].type == type) {
            string += `
        <div class="cardInfo" data-name="${list[z].name}" data-desc="${list[z].desc}"><img src=${list[z].src}></div>`
        }
      }
      string+= `<span onclick="createDisplay();">🙊</span>`;
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
})

function goBack() {
    gameDeck.push(removedDeck[removedDeck.length - 1]);
    let type = removedDeck[removedDeck.length - 1].type;
    removedDeck.pop();
    createDisplay();
    let accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].style.display = "none";
    }
    let panels = document.getElementsByClassName("cardDisplay");
    switch(type) {
        case "Engineers":
            toggleAccordion(panels[0]);
            break;
        case "Surveyors":
            toggleAccordion(panels[1]);
            break;
        case "Station Masters":
            toggleAccordion(panels[2]);
            break;
    }
}

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

settings.addEventListener("click", function() {
    createSettingsDisplay();
})

function createSettingsDisplay() {
    let string = displaySettings(engineers, "Engineers");
    string += displaySettings(surveyors, "Surveyors");
    string += displaySettings(stationMasters, "Station Masters");
    document.getElementById("settings").innerHTML = string;
    settingsDiv.style.display = "block";

    let checkboxes = document.getElementsByTagName("input");
    for (let i=0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener("change", function() {
            aggroLevel.value = "";
            switch (this.parentElement.dataset.target) {
                case "Engineers":
                    toggleBan(engineers, this.name, this.checked);
                    break;
                case "Surveyors":
                    toggleBan(surveyors, this.textContent, this.checked);
                    break;
                case "Station Masters":
                    toggleBan(stationMasters, this.textContent, this.checked);
                    break;
            }
        });
    }
}

function displaySettings(array, type) {
    let string = `<div data-target=${type}><h1>${type}</h1>`;
    for (let i = 0; i < array.length; i++) {
        array[i].isBanned = isAggro(array[i]);
        string += `<input id="${type}${i}" name="${array[i].name}" type="checkbox" ${array[i].isBanned ? "checked" : ""}><label for="${type}${i}">${array[i].name}</label>`;
    }
    string += `</div>`
    return string;
}

function toggleBan(array, card, state) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name == card) {
            if(state) {
                array[i].isBanned = true;
            }
            else {
                array[i].isBanned = false;
            }
        }
    }
}

function isAggro(card) {
    let aggro = aggroLevel.value;
    switch(aggro) {
        case "high":
            return false;
            break;
        case "medium":
            if (card.aggression == "high") {
                return true;
            }
            else { return false; }
            break;
        case "low" :
            if (card.aggression == "high" || card.aggression == "medium") {
                return true;
            }
            else { return false; }
        default:
            return card.isBanned;
            break;
    }
}

aggroLevel.addEventListener("change", function() {
    createSettingsDisplay();
})

endGame.addEventListener("click", function() {
    localStorage.clear();
})