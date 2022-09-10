const lenguageElements = 
{
    "english": 
    {
        "mainArea": ()=>
        {
           return ["Hangman", "classic mode", "easy", "medium", "hard", "options", "lenguages"]
        },

        "gameArea": ()=>
        {
            return ["Hangman", "Categorie", 'Play again!']
        },

        "msg": ()=>
        {
            return ["You have", "chances", "You lose! :(", "You Win! :)"]
        }
    },

    "portuguese":
    {
        "mainArea":()=>
        {
            return ["Forca", "modo clássico", "fácil", "médio", "difícil", "opções", "idiomas"]
        },

        "gameArea": ()=>
        {
            return ["Forca", "Categoria", 'Jogar novamente!']
        },

        "msg": ()=>
        {
            return ["Você têm", "chances", "Você perdeu! :(", "Você Ganhou! :)"]
        }
    }
};