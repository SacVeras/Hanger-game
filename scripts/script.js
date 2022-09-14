//-------------------- GLOBAL VARIABLES ------------------------
const root = document.getElementById("root");
let chances;
let word;
let wordsPlayed = [];
let lenguage = 'english';





//-------------------- Start app and events

createMainArea()


//------------------------- FUNCTIONS --------------------
function createMainArea()
{
    let arrayMainItems = lenguageElements[lenguage]["mainArea"]();

    let elementsMain = `
        <h1 class="main-title">${arrayMainItems[0]}</h1>

        <ul class="main-paage-list">
            <li class="classic-mode-area" onclick="startGame()">
                ${arrayMainItems[1]}
            </li>

            <li class="options-btn">
                ${arrayMainItems[5]}

                <ul class="options">
                    <li class="lenguage-opt">
                        ${arrayMainItems[6]}
                        <ul class="lenguages">
                            <li id="english" onclick="changaLenguage(this.id)">English</li>
                            <li id="portuguese" onclick="changaLenguage(this.id)">Português</li>
                        </ul>
                    </li>

                    <li class="mode-opt">
                        mode

                        <ul class="modes">
                            <li onclick="changeMode('dark')">dark mode</li>
                            <li onclick="changeMode('white')">whilte mode</li>
                        </ul>

                    </li>
                </ul>
            </li>
    </ul>`;

    

    root.innerHTML = elementsMain;

}

function startGame()
{
    chances = 5;
    createGameArea();
    defaultElements();
    updateChancesValue();
    createsBTNCHARs();
    chooseCategorie();
}

function createGameArea()
{    
    let arrayGameAreaItems = lenguageElements[lenguage]["gameArea"]();
    root.innerHTML = `
    <h1 class="title-game">${arrayGameAreaItems[0]}</h1>

    <div class="game-area">

        <div class="BTNs-CHARs" id="BTNCHAR"></div>
    

        <span class="categorie-title">${arrayGameAreaItems[1]}: <span id="categorie"></span></span>
    

        <div class="word" id="word"></div>
    

        <div class="MSG-container">
            <span id="MSG"></span> <span id="chances"></span> <span id="MSG-continuation"></span>
        </div>

        <input id="restart" class="restartBTN" type="button" value="${arrayGameAreaItems[2]}" onclick="startGame()">

    </div>`;

    //----------------------------------------------------------------------------------------------------------------

    document.onkeydown = event => {

        const characters = 'abcdefghijklmnopqrstuvwxyzç'.toUpperCase().split('');
        const restartBTN = document.getElementById("restart");
        const char = event.key.toUpperCase()
    
        /*verifica se char é um caractere válido, se for,
        ele verifica se a palavra possui este caractere*/
        characters.includes(char)? verify(char) : '';

        //verifica se o botão de restart está visível, se tiver ele o aperta.
        if (event.key == 'Enter'){ restartBTN.style.display == "inline-block"? restartBTN.click(): ''; }
    }

}

function defaultElements()
{
    document.getElementById("restart").style.display = "none";
    document.getElementById("chances").style.display = "inline";
    document.getElementById("MSG-continuation").style.display = "inline-block";
    document.getElementById("MSG").innerText = lenguageElements[lenguage]["msg"]()[0];
    document.getElementById("MSG-continuation").innerText = lenguageElements[lenguage]["msg"]()[1];
    document.getElementById("word").classList.remove("win");
}






//--------------------------------------------------

// BTNCHAR is "button character"
// creates the letters buttons
function createsBTNCHARs()
{
    const characters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

    if(lenguage == 'portuguese')
    {
        characters.push('Ç')
    }

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

    let categories;
    let categorieIndex;
    let words;
    let wordIndex;
    const categoriesOptions = wordsLists[lenguage];


    //------------------------------------------------------------------------------
    do
    {
        categories = categoriesOptions['categoriesWords'];
        categorieIndex = randomIndex(categoriesOptions['categoriesList'].length);
        words = categories[categoriesOptions['categoriesList'][categorieIndex]];
        wordIndex = randomIndex(words.length);
        word = words[wordIndex].toUpperCase();

    }while(wordsPlayed.includes(word))
    //--------------------------------------------------------------------------------


    if(wordsPlayed.length == 30)
    {
        wordsPlayed.shift();
    }

    wordsPlayed.push(word)

    updateCategoryContainerValue(categoriesOptions['categoriesList'][categorieIndex]);
    updateWordContainerValue(word);
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
    const arraysOfSpecialCharacters = 
    {
        'A': () => {return ['A','Â', 'Ã', 'Á', 'À']},
        'E': () => {return ['E','É', 'Ê', 'È']},
        'I': () => {return ['I','Í', 'Ì', 'Î']},
        'O': () => {return ['O','Ô', 'Ó', 'Ò', 'Õ']},
        'U': () => {return ['U','Ú', 'Ù', 'Û']},
    }

    if(chances > 0)
    {
        const BTNCHAR = document.getElementById(char);

        if(BTNCHAR.className == "actived"){

            BTNCHAR.className = "desactived";

            if(['A', 'E', 'I', 'O', 'U'].includes(char))
            {
                verifySpecialChars(arraysOfSpecialCharacters[char]())
            }
            else
            {
                word.includes(char) ? findPositionChar(char) : (chances--, updateChancesValue());
            }

        }

    }

    function verifySpecialChars(array)
    {
        let haveOne = false;
        const specialChars = array;
        specialChars.forEach(schar => 
            {
                if(word.includes(schar))
                {
                    findPositionChar(schar);
                    haveOne = true;
                }
            }
        )
        
        if(haveOne == false)
        {
            chances--;
            updateChancesValue();
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
        msg = lenguageElements[lenguage]["msg"]()[2];
    }
    else
    {
        msg = lenguageElements[lenguage]["msg"]()[3];
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

function changaLenguage (nl)
{
    lenguage = nl;
    createMainArea();
}

function changeMode(mode)
{
    if (mode == "dark")
    {
        document.getElementById("mode").innerHTML = `<link rel="stylesheet" href="./styles/modes/dark-mode.css">`;
    }
    else if (mode == "white")
    {
        document.getElementById("mode").innerHTML = `<link rel="stylesheet" href="./styles/modes/white-mode.css">`;
    }
}