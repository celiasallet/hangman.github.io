const words = ['Lion', 'Tigre', 'Éléphant', 'Girafe', 'Zèbre', 'Rhinocéros', 'Hippopotame', 'Léopard', 'Guépard', 'Gorille', 'Chimpanzé', 'Orang-outan', 'Kangourou', 'Koala', 'Ours', 'Panda', 'Renard', 'Loup', 'Coyote', 'Lynx', 'Jaguar', 'Puma', 'Cerf', 'Chevreuil', 'Élan', 'Caribou', 'Bison', 'Buffle', 'Chameau', 'Dromadaire', 'Lama', 'Alpaga', 'Cheval', 'Âne', 'Mule', 'Vache', 'Mouton', 'Chèvre', 'Cochon', 'Lapin', 'Lièvre', 'Écureuil', 'Castor', 'Raton', 'Blaireau', 'Hérisson', 'Taupe', 'Chauve-souris', 'Manchot', 'Aigle', 'Faucon', 'Hibou', 'Chouette', 'Autruche', 'Flamant', 'Pélican', 'Albatros', 'Colibri', 'Perroquet', 'Toucan', 'Moineau', 'Rossignol', 'Canard', 'Oie', 'Cygne', 'Poule', 'Dinde', 'Paon', 'Serpent', 'Lézard', 'Caméléon', 'Crocodile', 'Alligator', 'Tortue', 'Grenouille', 'Crapaud', 'Salamandre', 'Truite', 'Saumon', 'Thon', 'Requin', 'Dauphin', 'Baleine', 'Phoque', 'Otarie', 'Pingouin', 'Pieuvre', 'Calmar', 'Méduse', 'Crabe', 'Homard', 'Crevette', 'Escargot', 'Limace', 'Araignée', 'Fourmi', 'Abeille', 'Papillon', 'Moustique', 'Ver'];

function getRandomWord(words) {
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

let motADeviner = getRandomWord(words);
console.log("Le mot à deviner est : " + motADeviner);
console.log("Ce nom d'animal contient " + motADeviner.length + " lettres. Aide le Fermier à le retrouver !");

let lettresRestantes = motADeviner.length;
let lettresTrouvees = new Array(motADeviner.length).fill(false);

// Afficher le nombre de lettres restantes au début du jeu
document.getElementById('lettresRestantes').innerText = `Il reste ${lettresRestantes} lettre(s) à trouver.`;

// Ajout de l'écouteur d'événement pour le formulaire
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre et de rafraîchir la page

    let lettre = document.getElementById("Lettre").value.trim().toLowerCase(); // Récupérer la lettre proposée
    document.getElementById("Lettre").value = ""; // Effacer le champ de saisie

    console.log("Lettre proposée :", lettre);
});