//-------------------- GLOBAL VARIABLES ------------------------
const root = document.getElementById("root");
let chances;
let word;
let difficult = 'easy';





//-------------------- Start app and events

createMainArea()






//------------------------- FUNCTIONS --------------------
function createMainArea()
{
    root.innerHTML = `
            <h1 class="main-title">Hangman</h1>

        <ul class="main-paage-list">
            <li class="classic-mode-area">
                classic mode

                <ul class="classic-mode-difficulties">
                    <li onclick="setDifficult('easy')">easy</li>
                    <li onclick="setDifficult('medium')">medium</li>
                    <li onclick="setDifficult('hard')">hard</li>
                </ul>
            </li>

            <li class="options-btn">options</li>
        </ul>`;
}

function setDifficult(value)
{
    difficult = value;
    startGame()
}

function startGame()
{
    chances = 5;
    createGameArea()
    defaultElements()
    updateChancesValue();
    createsBTNCHARs();
    chooseCategorie();
}

function createGameArea()
{    
    root.innerHTML = `
    <h1 class="title-game">Hanger game</h1>

    <div class="game-area">

        <div class="BTNs-CHARs" id="BTNCHAR"></div>
    

        <span class="categorie-title">Categorie: <span id="categorie"></span></span>
    

        <div class="word" id="word"></div>
    

        <div class="MSG-container">
            <span id="MSG"></span> <span id="chances"></span> <span id="MSG-continuation"></span>
        </div>

        <input id="restart" class="restartBTN" type="button" value="play again" onclick="startGame()">

    </div>`;
}


function defaultElements()
{
    document.getElementById("restart").style.display = "none";
    document.getElementById("chances").style.display = "inline";
    document.getElementById("MSG-continuation").style.display = "inline-block";
    document.getElementById("MSG").innerText = "You have";
    document.getElementById("MSG-continuation").innerText = "chances";
    document.getElementById("word").classList.remove("win");
}





//--------------------------------------------------

// BTNCHAR is "button character"
// creates the letters buttons
function createsBTNCHARs()
{
    const characters =
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    //reset the values in btn container
    document.getElementById("BTNCHAR").innerHTML = "";

    characters.forEach(char => constructBTNCHAR(char));
}

function constructBTNCHAR(char)
{
    let BTN = `<input `;
    BTN += `type="button"`;
    BTN += `class="actived"`;
    BTN += `value="${char}"`;
    BTN += `id="${char}"`;
    BTN += `onclick="verify(id)"`
    BTN += `>`

    addBTNCHAROnContaineer(BTN);

}

//puts the buttons in its container element
function addBTNCHAROnContaineer(BTN)
{
    const BTNCHAR = document.getElementById("BTNCHAR");

    BTNCHAR.innerHTML += BTN;
}

//--------------------------------------------------










//--------------------------------------------------

//choose the word category
function chooseCategorie()
{
    const categories = difficulties[difficult];
    const categorieIndex = randomIndex(categiriesList.length);
    const words = categories[categiriesList[categorieIndex]];
    const wordIndex = randomIndex(words.length);
    word = trasformWordInArray(words[wordIndex].toUpperCase());
    
    updateCategoryContainerValue(categiriesList[categorieIndex]);
    updateWordContainerValue(word);
}

//turns the chosen word into an array
function trasformWordInArray(word)
{

    let array = [];

    for (let i = 0; i < word.length; i++)
    {
        array.push(word[i])
    }

    return array;
}

//generates a random index to decide which category and which word will be chosen
function randomIndex(max)
{
    return Math.round(Math.random() * (max - 1) + 1) - 1;
}

//puts the chosen category in its container element
function updateCategoryContainerValue(categorie)
{
    document.getElementById("categorie").innerText = categorie;
}

//add white spaces with the chosen word size in the container
function updateWordContainerValue(word)
{
    document.getElementById("word").innerHTML = "";

    for(let i = 0; i < word.length; i++)
    {
        
        if(word[i] == " "){
            document.getElementById("word").innerHTML += `<span class="nlt"> </span>`
        }
        else if(word[i] == "-"){
            document.getElementById("word").innerHTML += `<span class="nlt">-</span>`
        }
        else{
            document.getElementById("word").innerHTML += `<span class="ltt" id="ltt_${i}"></span>`;
        }    }
}

//--------------------------------------------------










//--------------------------------------------------
//checks if the letter chosen by the user is in the word
function verify(char)
{
    if(chances > 0)
    {
        const BTNCHAR = document.getElementById(char);

        if(BTNCHAR.className == "actived"){

            BTNCHAR.className = "desactived";
    
            word.includes(char)? findPositionChar(char) : (chances--, updateChancesValue());
        }

    }

    if(chances == 0 || verifyAllComplete())
    {
        if(chances != 0)
        {
            document.getElementById("word").classList.add("win");
        }
        makeMessage();
        document.getElementById("restart").style.display = "inline-block";
        document.getElementById("chances").style.display = "none";
        document.getElementById("MSG-continuation").style.display = "none";
        showAnswer();
    }

}

//does and send the message "you win" or "you lost" to the container element
function makeMessage()
{
    let msg;
    if(chances == 0)
    {
        msg = "You lose! :("
    }
    else
    {
        msg = "You Win! :)"
    }

    document.getElementById("MSG").innerText = msg;
}

//checks if all the letters in the blanks are filled
function verifyAllComplete()
{
    let answer = true;

    const listChar = document.getElementById("word").children;
    
    for(let i = 0; i < listChar.length; i++)
    {
        if(listChar[i].innerText == "" && word[i] !== " ")
        {

            answer = false;
        
        }
    }
        
    return answer;
}

//search where the user-selected letter is in the word, if it has
function findPositionChar(char)
{
    for (let i = 0; i < word.length; i++)
    {
        if(word[i] == char)
        {
            document.getElementById(`ltt_${i}`).innerText = char;
        }
    }
}

//coloca o novo valor de chances no contêiner
function updateChancesValue()
{
    document.getElementById("chances").innerText = chances;
}

//shows the answer if the user's chances are 0
function showAnswer()
{       
    const listChar = document.getElementById("word").children;
    
    for(let i = 0; i < listChar.length; i++)
    {
        if(listChar[i].innerText == "" && word[i] !== " ")
        {
            document.getElementById(`ltt_${i}`).innerHTML = `<span class="missingLT">${word[i]}</span>`;
        }
    }

}
//--------------------------------------------------