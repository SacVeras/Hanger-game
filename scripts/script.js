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
    root.innerHTML = structures["mainAreaStructure"](arrayMainItems);
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
    root.innerHTML = structures["gameAreaStructure"](arrayGameAreaItems);

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
    document.getElementById("word").classList.remove("LTSWhenWin");
}






//--------------------------------------------------

function createsBTNCHARs()
{
    const characters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

    document.getElementById("BTNCHAR").innerHTML = "";

    characters.forEach(char => constructBTNCHAR(char));
}

function constructBTNCHAR(char)
{
    let BTN = `<li class="actived" id="${char}" onclick="verify(this.id)"> ${char} </li>`;
    document.getElementById("BTNCHAR").innerHTML += BTN;
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
            document.getElementById("word").innerHTML += `<li class="llt"> </li>`
        }
        else if(word[i] == "-"){
            document.getElementById("word").innerHTML += `<li class="llt">-</li>`
        }
        else{
            document.getElementById("word").innerHTML += `<li class="llt hlt" id="ltt_${i}"></li>`;
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
            let letters = document.querySelectorAll(".llt");
            for(let i = 0; i < letters.length; i++)
            {
                if(letters != "")
                {
                    letters[i].classList.add("LTSWhenWin");
                }
            }
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
            document.getElementById(`ltt_${i}`).innerHTML = `<span class="missingLTS">${word[i]}</span>`;
        }
    }

}
//--------------------------------------------------

function changeLenguage (nl)
{
    lenguage = nl;
    createMainArea();
}




function showsList(listToHide, ListToShow)
{
    document.getElementById(listToHide).style.display = "none";
    document.getElementById(ListToShow).style.display = "block";
}