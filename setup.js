const numPlayers = document.getElementById("numPlayers");
const startDiv = document.getElementById("startDiv");
const start = document.getElementById("startGame");
const engineerList = document.getElementById("engineerList");
const surveyorList = document.getElementById("surveyorList");
const stationMasterList = document.getElementById("stationMasterList");

start.addEventListener("click", function() {
    engineerList.innerHTML = displayDeck(createDeck(engineers));
    surveyorList.innerHTML = displayDeck(createDeck(surveyors));
    stationMasterList.innerHTML = displayDeck(createDeck(stationMasters));
    startDiv.style.display = "none";
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
        <img src=${list[z].src}><p>${list[z].desc}</p>`
      }
      return string;
}