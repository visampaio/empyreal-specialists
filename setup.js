const numPlayers = document.getElementById("numPlayers");
const startDiv = document.getElementById("startDiv");
const settingsDiv = document.getElementById("settingsDiv");
const lastSelected = document.getElementById("lastSelected");
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
let expansion = document.getElementById("expansion");

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
        cardPicked.isBanned = updateBanStatus(cardPicked);
        if (!cardPicked.isBanned) {
            gameDeck.push(cardPicked);
            list.splice(j, 1);
            i++;
        }
    }
}

function createDisplay(){
    window.scrollTo(0, 0);
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
            document.getElementById("question").textContent = "Do you want to select this character?";
        });
    }
    localStorage.setItem("gameDeck", JSON.stringify(gameDeck));
    localStorage.setItem("removedDeck", JSON.stringify(removedDeck));
    if (removedDeck.length > 0) { lastSelected.textContent = removedDeck[removedDeck.length - 1].type.slice(0, -1) + ": " + removedDeck[removedDeck.length - 1].name; }
    // Original code from https://www.w3schools.com/howto/howto_js_accordion.asp
    let accordions = document.getElementsByClassName("accordion");

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            window.scrollTo(0, 0);
            for (let i = 0; i < accordions.length; i++) {
                accordions[i].style.display = "none";
            }
            document.getElementById("endGameDiv").style.display = "none";
            lastSelected.textContent = "";
            let panel = this.nextElementSibling;
            toggleAccordion(panel);
        });
    }

    document.getElementById("oops").innerHTML = "";
    if (removedDeck.length >= 1) {
        document.getElementById("oops").innerHTML +=`<span  class="accordion" onclick="goBack();">🙊 ${removedDeck.length}</span>`;
    }
    document.getElementById("endGameDiv").style.display = "block";
}

function displayDeck(list, type) {
    let string = `<button class="accordion"><img src="./img/${type.toLowerCase()}_logo.png">${type}</button><div class="cardDisplay">`;
      for (let z=0; z < list.length; z++) {
        if (list[z].type == type) {
            string += `
        <div class="cardInfo" data-name="${list[z].name}" data-desc="${list[z].desc}"><img src=${list[z].src}></div>`
        }
      }
      string+= `<div class="oops" onclick="createDisplay();">🙊</div>`;
      return string;
}

selectYes.addEventListener("click", function() {
    modal.style.display = "none";
    if (this.dataset.target == "end") {
        resetGame();
    }
    else {
        for (let i=0; i < gameDeck.length; i++) {
            if (gameDeck[i].name == this.dataset.target) {
                removedDeck.push(gameDeck[i]);
                lastSelected.textContent = removedDeck[removedDeck.length - 1].type.slice(0, -1) + ": " + removedDeck[removedDeck.length - 1].name;
                gameDeck.splice(i, 1);
            }
        }
        createDisplay();
    }
})

function goBack() {
    window.scrollTo(0, 0);
    gameDeck.push(removedDeck[removedDeck.length - 1]);
    let type = removedDeck[removedDeck.length - 1].type;
    removedDeck.pop();
    createDisplay();
    lastSelected.textContent = "";
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
    if (settingsDiv.style.display === "block") {
      settingsDiv.style.display = "none";
    } else {
      createSettingsDisplay();
    }
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
            switch (this.parentElement.parentElement.dataset.target) {
                case "Engineers":
                    toggleBan(engineers, this.name, this.checked);
                    break;
                case "Surveyors":
                    toggleBan(surveyors, this.name, this.checked);
                    break;
                case "Station Masters":
                    toggleBan(stationMasters, this.name, this.checked);
                    break;
            }
        });
    }
}

function displaySettings(array, type) {
    let string = `<div data-target="${type}"><h1>${type}</h1>`;
    for (let i = 0; i < array.length; i++) {
        array[i].isBanned = updateBanStatus(array[i]);
        if (inBannedExpansion(array[i])) {
            continue;
        }
        string += `<label for="${type}${i}"><input id="${type}${i}" name="${array[i].name}" type="checkbox" ${array[i].isBanned ? "checked" : ""}>${array[i].name} ${array[i].isExpansion ? "‼️" : ""}</label>`;
    }
    string += `</div>`
    return string;
}

function updateBanStatus(card) {
    return isAggro(card) || inBannedExpansion(card);
}

function toggleBan(array, card, state) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name == card) {
            if(state) {
                array[i].isBanned = true;
                array[i].custom = true;
            }
            else {
                array[i].isBanned = false;
                array[i].custom = false;
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
            if (card.custom == true) { return true; }
            else { return false; }
            break;
    }
}

aggroLevel.addEventListener("change", function() {
    createSettingsDisplay();
})

function inBannedExpansion(card) {
    let choice = expansion.value;
    if (choice == "yes") {
        return false;
    }
    else {
        if (card.isExpansion) {
                return true;
        }
        else { return false; }
    }
}

expansion.addEventListener("change", function() {
    createSettingsDisplay();
})

endGame.addEventListener("click", function() {
    modal.style.display = "block";
    selectYes.dataset.target = "end";
    document.getElementById("cardName").textContent = "";
    document.getElementById("cardDesc").textContent = "";
    document.getElementById("question").textContent = "Do you want to end the game?";
})

function resetGame() {
    localStorage.clear();
    window.location.href = window.location.href;
}