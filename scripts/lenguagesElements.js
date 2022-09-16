const lenguageElements = 
{
    "english": 
    {
        "mainArea": ()=>
        {
           return ["Hangman game", "Free mode", "Rush mode", "VS mode", "Options", "Lenguages", "Themes", "Back", "Dark mode", "White mode"]
        },

        "gameArea": ()=>
        {
            return ["Categorie", 'Play again!']
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
            return ["Hangman game", "Modo livre", "Modo Rush", "Modo VS", "Opções", "Idiomas", "Temas", "Voltar", "Modo escuro", "Modo claro"]
        },

        "gameArea": ()=>
        {
            return ["Categoria", 'Jogar novamente!']
        },

        "msg": ()=>
        {
            return ["Você têm", "chances", "Você perdeu! :(", "Você Ganhou! :)"]
        }
    }
};