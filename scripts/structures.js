const structures = 
{
    "mainAreaStructure": (arrayMainItems)=>
    {
        return `
        <div class="main-area">
            <h1 class="main-title">${arrayMainItems[0]}</h1>
        
            <ul class="main-page-list" id="main-page-list">
        
            <div id="principal">
                <li onclick="startGame()">${arrayMainItems[1]}</li>
                <li onclick="showsList('principal', 'options')">${arrayMainItems[4]}</li>
            </div>
        
            <div id="options">
                <li onclick="showsList('options', 'lenguages')">${arrayMainItems[5]}</li>
                <li onclick="showsList('options', 'themes')">${arrayMainItems[6]}</li>
                <li onclick="showsList('options', 'principal')">${arrayMainItems[7]}</li>
            </div>
        
            <div id="lenguages">
                <li onclick="changeLenguage('english')">english</li>
                <li onclick="changeLenguage('portuguese')">português</li>
                <li  onclick="showsList('lenguages', 'options')">${arrayMainItems[7]}</li>
            </div>
        
            <div id="themes">
                <li onclick="chnageTheme('dark')">${arrayMainItems[8]}</li>
                <li onclick="chnageTheme('white')">${arrayMainItems[9]}</li>
                <li onclick="showsList('themes', 'options')">${arrayMainItems[7]}</li>
            </div>
            </ul>
        </div>
    </div>`;
    },

    "gameAreaStructure": (arrayGameAreaItems)=>
    {
        return `
        <div class="game-area">

            <div class="game-subarea">

                <ul class="BTNs-CHARs" id="BTNCHAR">
                </ul>
        
                <span class="categorie-title">${arrayGameAreaItems[0]}: <span id="categorie"></span></span>
        
                <div class="word" id="word">                    
                </div>
        
                <div class="MSG-container">
                    <span id="MSG"></span > <span id="chances"></span> <span id="MSG-continuation"></span>
                </div>
        
                <div class="reset-container">
                    <input id="restart" class="restartBTN" type="button" value="${arrayGameAreaItems[1]}" onclick="startGame()">
                </div>
            </div>
        </div>`
    }
}