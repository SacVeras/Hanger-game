//creates the main area
//---------------------------------------------------------------------------------
function createArea(area)
{
    const arrayItems = lenguageElements[lenguage][area]();
    const structItem = area == "mainArea"? "mainAreaStructure": "gameAreaStructure";
    root.innerHTML = structures[structItem](arrayItems);

    if(area == "gameArea")
    {
        document.onkeydown = event => inputKeyboard(event);
    }
}
//---------------------------------------------------------------------------------








//---------------------------------------------------------------------------------
//gerecncia a entrada do teclado
function inputKeyboard(event)
{
    const restartBTN = document.getElementById("restart");
    const char = event.key.toUpperCase()

    /*verifica se char é um caractere válido, se for,
    ele verifica se a palavra possui este caractere*/
    characters.includes(char)? verify(char) : '';

    //verifica se o botão de restart está visível, se tiver ele o aperta.
    if (event.key == 'Enter'){
        restartBTN.style.display == "inline-block"? restartBTN.click(): '';
    }
}
//---------------------------------------------------------------------------------








//---------------------------------------------------------------------------------
//turn the elementes to default state
function defaultElements()
{
    document.getElementById("restart").style.display = "none";
    document.getElementById("chances").style.display = "inline";
    document.getElementById("MSG-continuation").style.display = "inline-block";
    document.getElementById("MSG").innerText = lenguageElements[lenguage]["msg"]()[0];
    document.getElementById("MSG-continuation").innerText = lenguageElements[lenguage]["msg"]()[1];
    document.getElementById("word").classList.remove("LTSWhenWin");
}
//---------------------------------------------------------------------------------








//---------------------------------------------------------------------------------
//creates the characters buttons
function createsBTNCHARs()
{
    //remove the older elements
    document.getElementById("BTNCHAR").innerHTML = "";

    //creates the new elements
    characters.forEach(char => {
        let BTN = `<li class="actived" id="${char}" onclick="verify(this.id)"> ${char} </li>`;
        document.getElementById("BTNCHAR").innerHTML += BTN;
    });
}
//---------------------------------------------------------------------------------








//---------------------------------------------------------------------------------
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



function updateCategoryContainerValue(categorie)
{
    document.getElementById("categorie").innerText = categorie;
}



function randomIndex(max)
{
    return Math.round(Math.random() * (max - 1) + 1) - 1;
}



function updateWordContainerValue(word)
{
    document.getElementById("word").innerHTML = "";

    for(let i = 0; i < word.length; i++)
    {
        let elementLI = "";

        if (word[i] == " " || word[i] == "-")
        {
            elementLI = `<li class="llt">${word[i]}</li>`;
        }
        else
        {
            elementLI = `<li class="llt hlt" id="ltt_${i}"></li>`;
        }


        document.getElementById("word").innerHTML += elementLI;
    }

}
//---------------------------------------------------------------------------------








//---------------------------------------------------------------------------------
function verify(char)
{
    const arraysOfSpecialCharacters = 
    {
        'A': () => {return ['A','Â', 'Ã', 'Á', 'À']},
        'E': () => {return ['E','É', 'Ê', 'È']},
        'I': () => {return ['I','Í', 'Ì', 'Î']},
        'O': () => {return ['O','Ô', 'Ó', 'Ò', 'Õ']},
        'U': () => {return ['U','Ú', 'Ù', 'Û']},
    };



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
                word.includes(char)?
                findPositionChar(char):(chances--, updateChancesValue());
            }

        }

    };


    //case game ends
    if(chances == 0 || verifyAllComplete()){ gamesEnd() };
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



function gamesEnd()
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
//---------------------------------------------------------------------------------







//---------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------







//---------------------------------------------------------------------------------
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
};



function findPositionChar(char)
{
    for (let i = 0; i < word.length; i++)
    {
        if(word[i] == char)
        {
            document.getElementById(`ltt_${i}`).innerText = char;
        }
    }
};



function updateChancesValue()
{
    document.getElementById("chances").innerText = chances;
}



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



function changeLenguage (nl)
{
    lenguage = nl;
    createArea("mainArea");
}



function showsList(listToHide, ListToShow)
{
    document.getElementById(listToHide).style.display = "none";
    document.getElementById(ListToShow).style.display = "block";
}



function chnageTheme(theme)
{
    const link = `./styles/themes/${theme}_mode.css`;
    document.getElementById("theme").href = link;
}
//---------------------------------------------------------------------------------







//---------------------------------------------------------------------------------
