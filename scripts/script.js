//-------------------- GLOBAL VARIABLES ------------------------
const root = document.getElementById("root");
let chances;
let word;
let wordsPlayed = [];
let lenguage = 'portuguese';
const characters = 'abcdefghijklmnopqrstuvwxyzç'.toUpperCase().split('');



//creates the main area for first time
createArea("mainArea")


function startGame()
{
    chances = 5;
    createArea("gameArea");
    defaultElements();
    updateChancesValue();
    createsBTNCHARs();
    chooseCategorie();
};