const words = ['Lion', 'Tigre', 'Éléphant', 'Girafe', 'Zèbre', 'Rhinocéros', 'Hippopotame', 'Léopard', 'Guépard', 'Gorille', 'Chimpanzé', 'Orang-outan', 'Kangourou', 'Koala', 'Ours', 'Panda', 'Renard', 'Loup', 'Coyote', 'Lynx', 'Jaguar', 'Puma', 'Cerf', 'Chevreuil', 'Élan', 'Caribou', 'Bison', 'Buffle', 'Chameau', 'Dromadaire', 'Lama', 'Alpaga', 'Cheval', 'Âne', 'Mule', 'Vache', 'Mouton', 'Chèvre', 'Cochon', 'Lapin', 'Lièvre', 'Écureuil', 'Castor', 'Raton', 'Blaireau', 'Hérisson', 'Taupe', 'Chauve-souris', 'Manchot', 'Aigle', 'Faucon', 'Hibou', 'Chouette', 'Autruche', 'Flamant', 'Pélican', 'Albatros', 'Colibri', 'Perroquet', 'Toucan', 'Moineau', 'Rossignol', 'Canard', 'Oie', 'Cygne', 'Poule', 'Dinde', 'Paon', 'Serpent', 'Lézard', 'Caméléon', 'Crocodile', 'Alligator', 'Tortue', 'Grenouille', 'Crapaud', 'Salamandre', 'Truite', 'Saumon', 'Thon', 'Requin', 'Dauphin', 'Baleine', 'Phoque', 'Otarie', 'Pingouin', 'Pieuvre', 'Calmar', 'Méduse', 'Crabe', 'Homard', 'Crevette', 'Escargot', 'Limace', 'Araignée', 'Fourmi', 'Abeille', 'Papillon', 'Moustique', 'Ver',
];
    
function getRandomWord(words) {
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

console.log(getRandomWord(words));

console.log("Ce nom d'animal contient " + (getRandomWord(words).length) + " lettres. Aide le Fermier à le retrouver !");

getRandomWord(words);
getRandomWord(words).length 


const form = document.getElementById("myForm");

    form.addEventListener("submit", function(recupererLettre) {
        recupererLettre.preventDefault();
        let lettre = document.getElementById("Lettre").value;
        console.log("Lettre proposée :", lettre);
        if lettre { 
            i
        }

       //  document.getElementById("Lettre").value = "";
    });



