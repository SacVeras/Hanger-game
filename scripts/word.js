const wordsLists = 
{


        'english':
        {

            'categoriesList' : ['animals', 'fruits','country'],

            'categoriesWords' : {

                'animals':
                ["Akbash","Akita","Albatross","Aldabra Giant Tortoise","Alligator","Alpine Dachsbracke","American Bulldog",
                "American Cocker Spaniel","American Coonhound","American Eskimo Dog","Angelfish","Ant","Anteater","Antelope",
                "Appenzeller Dog","Arctic Fox","Arctic Hare","Arctic Wolf","Armadillo","Asian Elephant","Asian Giant Hornet",
                "Asian Palm Civet","Asiatic Black Bear","Australian Cattle Dog","Australian Kelpie Dog","Australian Mist",
                "Avocet","Axolotl","Aye Aye","Baboon","Bactrian Camel","Badger","Balinese","Bandicoot","Barb","Barn Owl",
                "Barnacle","Barracuda","Basenji Dog","Basking Shark","Basset Hound","Bat","Beagle","Bear","Bearded Collie",
                "Bearded Dragon","Beaver","Beetle","Bengal Tiger","Bichon Frise","Binturong","Bird","Birds Of Paradise",
                "Birman","Bison","Black Bear","Black Rhinoceros","Black Russian Terrier","Black Widow Spider","Bloodhound",
                "Blue Lacy Dog","Blue Whale","Bobcat","Bolognese Dog","Bombay","Bongo","Bonobo","Booby","Border Collie",
                "Border Terrier","Bornean Orang-utan","Borneo Elephant","Boston Terrier","Bottle Nosed Dolphin","Boxer Dog",
                "Boykin Spaniel","Brown Bear","Budgerigar","Buffalo","Bull Mastiff","Bull Shark","Bull Terrier","Bullfrog",
                "Bumble Bee","Burmese","Burrowing Frog","Butterfly","Butterfly Fish","Caiman Lizard","Camel","Capybara",
                "Caracal","Cassowary","Cat","Caterpillar","Chicken","Chimpanzee","Chinchilla","Chinook","Chipmunk","Cichlid",
                "Clouded Leopard","Clown Fish","Clumber Spaniel","Coati","Cockroach","Collared Peccary","Collie","Coral","Cow",
                "Coyote","Crab","Crab-Eating Macaque","Crane","Crested Penguin","Crocodile","Cuscus","Cuttlefish","Deer","Dingo",
                "Discus","Dodo","Dog","Dolphin","Donkey","Dormouse","Dragonfly","Drever","Duck","Dugong","Dunker","Dusky Dolphin",
                "Dwarf Crocodile","Eagle","Earwig","Echidna","Elephant","Elephant Seal","Elephant Shrew","Emperor Penguin",
                "Emperor Tamarin","Emu","English Shepherd","English Springer Spaniel","Falcon","Fin Whale","Finnish Spitz","Fish",
                "Fishing Cat","Flamingo","Flounder","Fly","Flying Squirrel","Fossa","Fox","Frigatebird","Frilled Lizard","Frog",
                "Fur Seal","Gar","Gecko","Gerbil","Gharial","Giant Clam","Gibbon","Gila Monster","Giraffe","Glass Lizard",
                "Glow Worm","Goat","Golden Oriole","Goose","Gopher","Gorilla","Grasshopper","Grey Mouse Lemur","Grey Reef Shark",
                "Grey Seal","Greyhound","Grizzly Bear","Grouse","Hamster","Hare","Harrier","Havanese","Hermit Crab","Heron",
                "Hippopotamus","Honey Bee","Horn Shark","Horned Frog","Horse","Howler Monkey","Hummingbird","Humpback Whale","Hyena",
                "Ibis","Ibizan Hound","Iguana","Impala","Indian Elephant","Indri","Insect","Irish Setter","Jackal","Jaguar","Jellyfish",
                "Kakapo","Kangaroo","King Penguin","Kingfisher","Kiwi","Koala","Komodo Dragon","Kudu","Lemming","Lemur","Leopard",
                "Liger","Lion","Lionfish","Lizard","Mandrill","Marine Toad","Marsh Frog","Mastiff","Mayfly","Meerkat","Mole","Molly",
                "Mongoose","Mongrel","Monkey","Moorhen","Moose","Moray Eel","Moth","Mouse","Mule","Numbat","Octopus","Okapi",
                "Orang-utan","Ostrich","Otter","Oyster","Quetzal","Rabbit","Raccoon","Ragdoll","Rat","Rattlesnake","Red Panda",
                "Red Wolf","Red-handed Tamarin","Reindeer","Rhinoceros","River Dolphin","River Turtle","Robin","Salamander","Sand Lizard",
                "Saola","Scorpion","Sea Lion","Sea Turtle","Seahorse","Seal","Serval","Sheep","Shrimp","Siamese","Silver Dollar","Skunk",
                "Sloth","Slow Worm","Snail","Snake","Snapping Turtle","Sun Bear","Swan","Tasmanian Devil","Tawny Owl","Termite","Tetra",
                "Tiger","Tiger Shark","Tortoise","Toucan","Tree Frog","Tropicbird","Walrus","Wasp","Whippet","White Rhinoceros",
                "White Tiger","Wild Boar","Wolf","Wombat","Woodlouse","Woodpecker","zebra"],
        
                'fruits':
                ["Apple","Apricot","Avocado","Banana","Blackberry","Blueberry","Cherry",
                "Coconut","Cucumber","Durian","Dragonfruit","Fig","Gooseberry","Grape","Guava",
                "Jackfruit","Plum","Kiwifruit","Kumquat","Lemon","Lime","Mango","Watermelon",
                "Mulberry","Orange","Papaya","Passionfruit","Peach","Pear","Persimmon","Pineapple",
                "Pineberry","Quince","Raspberry","Soursop","Star fruit","Strawberry","Tamarind","Yuzu"],

                'country':
                ["Afghanistan","South Africa","Albania","Germany","Andorra","Angola","Saudi Arabia","Algeria","Argentina",
                "Armenia","Australia","Austria","Azerbaijan","Bahamas","Bangladesh","Barbados","Belgium","Belize","Benin","Belarus",
                "Bolivia","Bosnia and Herzegovina;","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Bhutan","Cape Verde",
                "Cameroon","Cambodia","Canada","Kazakhstan","Chad","Chile","China","Cyprus","Colombia","Comoros","Congo","North Korea",
                "South Korea","Ivory Coast","Costa Rica","Croatia","Cuba","Denmark","Dominica","Egypt","El Salvador","United Arab Emirates",
                "Ecuador","Scotland","Slovakia","Slovenia","Spain","United States of America;","Estonia","Ethiopia","Fiji","Philippines","Finland",
                "France","Gabon","Gambia","Ghana","Georgia","Granada","Greece","Guatemala","Guyana","Guinea","Guinea-Bissau","Gabon", "Gambia","Ghana",
                "Georgia","Granada","Greece","Guatemala","Guyana","Guinea","Guinea-Bissau","Yemen","India","Indonesia","England","Iran", "Iraq","Northern Ireland",
                "Ireland","Iceland","Israel","Italy","Jamaica","Japan","Jordan","Kosovo","Kuwait","Laos","Lesotho", "Latvia",
                "Lebanon","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malaysia","Maldives","Mali","Malta","Morocco","Mauritius",
                "Mauritania","Mexico","Myanmar","Micronesia","Mozambique","Moldova","Monaco","Mongolia","Montenegro","Namibia","Nauru","Nepal","Nicaragua ",
                "Nigeria","Norway","New Zealand","Oman","Wales","Netherlands","Palestine","Panama","Papua New Guinea","Pakistan","Paraguay" ,
                "Peru","Poland","Portugal","Qatar","Kenya","Kyrgyzstan","United Kingdom","Dominican Republic","Czech Republic","Romania","Rwanda","Russia" ,
                "Senegal","Sierra Leone","Serbia","Singapore","Syria","Somalia","Sri Lanka","Sudan","Sweden","Switzerland","Suriname","Thailand", "Taiwan","Tanzania",
                "East Timor","Togo","Trinidad and Tobago","Tunisia","Turkmenistan","Turkey","Tuvalu","Ukraine","Uganda","Uruguay","Uzbekistan","Vatican ",
                "Venezuela","Vietnam","Zambia","Zimbabwe"]
            }
        },
        
        'portuguese': 
        {
            'categoriesList' : ['animais', 'frutas', 'país'],

            'categoriesWords' : {

                'animais':
                ["abelha","abutre","ácaro","águia","albatroz","alce","alpaca","anaconda","anchova;","andorinha","anta",
                "antílope","aranha","arara","asno","atum","avestruz","babuíno","bacalhau","bacuri","bagre","baiacu","baleia",
                "barata","barbo","barracuda","beija-flor","besouro","bem-te-vi","bezerro","bicho-da-seda","bisonte","bode",
                "boi","borboleta","boto","búfalo","burro","cabra","cachalote","cachorro","cágado","camaleão","camarão","camelo",
                "camundongo","canário","canguru","capivara","caracol","caranguejo","carneiro","carrapato","cascavel","castor",
                "cavalo","cavalo-marinho","cegonha","centopeia","chimpanzé","chinchila","chita","cigarra","cisne","coala","cobra",
                "codorna","coelho","coiote","coruja","corvo","crocodilo","cupim","cutia", "degu","diabo-da-tasmânia","dingo",
                "dinossauro","dodô","doninha","dourado","dragão-de-komodo","dromedário","dugongo","égua","elefante","elefante-marinho",
                "ema","enchova","enferrujado","enguia","enho","escaravelho","escorpião","esmerilhão","espadarte","esponja","esquilo",
                "estrela-do-mar","esturjão","faisão","falcão","flamingo","foca","formiga","fossa","frango-d'água","freirinha","fuinha",
                "furão","gafanhoto","gaivota","galinha","galo","gambá","gamo","ganso","garça","gato","gavião","gazela","geco","gibão",
                "girafa","girino","gnu","golfinho","gorila","gralha","grifo","grilo","guará","guaxinim","hadoque","hamster","harpia",
                "hiena","hipopótamo","hírax","iaque","íbex","íbis","iguana","impala","indri","inhala","inhambu","irapuã","irara",
                "iratim","itapema","jabiru","jabuti","jaçanã","jacaré","jacu","jacupará","jaguar","jamanta","jararaca","javali",
                "jegue","jiboia","joaninha","joão-de-barro","jumento", "krill", "kiwi","lacraia","lagarta","lagartixa","lagarto",
                "lagosta","lampreia","leão","leão-marinho","lebre","lêmure","leopardo","lesma","lhama","libélula","lince","linguado",
                "lobo","lombriga","lontra","lula","macaco","mamute","mandril","mangangá","maracanã","marimbondo","mariposa","marisco",
                "marmota","marreco","medusa","melro","mergulhão","merluza","mexilhão","mico","milhafre","mineirinho","minhoca","mocho",
                "mono","morcego","moreia","morsa","mosca","mosquito","muçurana","mula","naja","narval","náutilo","neon","niala","numbat",
                "nútria","ocapi","olho-de-boi","onça","orangotango","orca","órix","ornitorrinco","ostra","ouriço","ouriço-do-mar","ovelha",
                "panda","pantera","papagaio","pardal","pássaro","pato","pavão","peixe","peixe-boi","pelicano","percevejo","perereca",
                "periquito","pernilongo","peru","pescada","pica-pau","pinguim","piolho","piranha","pirarucu","polvo","pombo","pônei",
                "porco","porco-espinho","porquinho-da-índia","preá","preguiça","pulga","quati","quatimirim","quebra-nozes","queixada",
                "quero-quero","quetzal","quiriquiri","rã","raia","raposa","ratazana","rato","rêmora","rena","rendeira","rinoceronte",
                "robalo","rouxinol","sabiá","sagui","salamandra","salmão","sanguessuga","sapo","sardão","sardinha","saúva","seriema",
                "serpente","siri","suçuarana","sucuri","suricate","surubi","surucucu","tainha","tamanduá","tamboril","tapir","tarântula",
                "tartaruga","tatu","tentilhão","tetra","texugo","tico-tico","tigre","tilápia","tordo","tororó","toupeira","touro",
                "tritão","truta","tubarão","tucano","unicórnio","urso","urubu","urutu","vaca","vaca-marinha","vaga-lume","veado",
                "verdilhão","vespa","víbora","vieira","vira-bosta","vison","viúva-negra","wombat","xexéu","zangão","zebra"],

                'frutas':
                ["Abacate","Amora","Ameixa","Acerola","Abacaxi","Açaí","Abricó","Atemoya","Bacuri","Banana","Baru","Buriti",
                "Cacau","Cajá-Manga","Caqui","Cereja","Cajá","Cupuaçu","Caju","Carambola","Coco","Damasco","Dendê","Feijoa",
                "Figo","Framboesa","Goiaba","Graviola","Groselha","Guamirim","Guaraná","ingá","Jabuticaba","Jaci","Jaca","Jambo",
                "Jamelão","Jatobá","Jenipapo","Juá","Jujuba","Kiwi","Laranja","Lichia","Limão","Longan","Maçã","Mamão","Mamey",
                "Manga","Mangaba","Mangostão","Maracujá","Marmelo","Melancia","Melão","Mexerica","Mirtilo","Morango","Murici",
                "Nectarina","oiti","Pequi","Pera","Pêssego","Pindaíba","Pinha","Pistache","Pitanga","Pitaya","Pitomba","Pomelo",
                "Puçá","Rambutão","Romã","Sapoti","Tâmara","Tamarindo","Tangerina","Tarumã","Toranja","Umbu","Umê","Uva"],

                'país':
                ["Afeganistão","África do Sul","Albânia","Alemanha","Andorra","Angola","Arábia Saudita","Argélia","Argentina",
                "Armênia","Austrália","Áustria","Azerbaijão","Bahamas","Bangladesh","Barbados","Bélgica","Belize","Benim","Bielorrússia",
                "Bolívia","Bósnia e Herzegovina;","Botswana","Brasil","Brunei","Bulgária","Burkina Faso","Burundi","Butão","Cabo Verde",
                "Camarões","Camboja","Canadá","Cazaquistão","Chade","Chile","China","Chipre","Colômbia","Comores","Congo","Coreia do Norte",
                "Coreia do Sul","Costa do Marfim","Costa Rica","Croácia","Cuba","Dinamarca","Dominica","Egito","El Salvador","Emirados Árabes Unidos",
                "Equador","Escócia","Eslováquia","Eslovênia","Espanha","Estados Unidos da América;","Estônia","Etiópia","Fiji","Filipinas","Finlândia",
                "França","Gabão","Gâmbia","Gana","Geórgia","Granada","Grécia","Guatemala","Guiana","Guiné","Guiné-Bissau","Gabão","Gâmbia","Gana",
                "Geórgia","Granada","Grécia","Guatemala","Guiana","Guiné","Guiné-Bissau","Iêmen","Índia","Indonésia","Inglaterra","Irã","Iraque",
                "Irlanda do Norte","Irlanda","Islândia","Israel","Itália","Jamaica","Japão","Jordânia","Kosovo","Kuwait","Laos","Lesoto","Letônia",
                "Líbano","Libéria","Líbia","Liechtenstein","Lituânia","Luxemburgo","Madagascar","Malásia","Maldivas","Mali","Malta","Marrocos","Maurícia",
                "Mauritânia","México","Mianmar","Micronésia","Moçambique","Moldávia","Mônaco","Mongólia","Montenegro","Namíbia","Nauru","Nepal","Nicarágua",
                "Nigéria","Noruega","Nova Zelândia","Omã","País de Gales","Países Baixos","Palestina","Panamá","Papua-Nova Guiné","Paquistão","Paraguai",
                "Peru","Polônia","Portugal","Qatar","Quênia","Quirguistão","Reino Unido","República Dominicana","República Tcheca","Romênia","Ruanda","Rússia",
                "Senegal","Serra Leoa","Sérvia","Singapura","Síria","Somália","Sri Lanka","Sudão","Suécia","Suíça","Suriname","Tailândia","Taiwan","Tanzânia",
                "Timor-Leste","Togo","Trinidad e Tobago","Tunísia","Turcomenistão","Turquia","Tuvalu","Ucrânia","Uganda","Uruguai","Uzbequistão","Vaticano",
                "Venezuela","Vietnã","Zâmbia","Zimbábue"]
            }
        }
}