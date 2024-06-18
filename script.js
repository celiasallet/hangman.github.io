const words = ['Lion', 'Tigre', 'Éléphant', 'Girafe', 'Zèbre', 'Rhinocéros', 'Hippopotame', 'Léopard', 'Guépard', 'Gorille', 'Chimpanzé', 'Orang-outan', 'Kangourou', 'Koala', 'Ours', 'Panda', 'Renard', 'Loup', 'Coyote', 'Lynx', 'Jaguar', 'Puma', 'Cerf', 'Chevreuil', 'Élan', 'Caribou', 'Bison', 'Buffle', 'Chameau', 'Dromadaire', 'Lama', 'Alpaga', 'Cheval', 'Âne', 'Mule', 'Vache', 'Mouton', 'Chèvre', 'Cochon', 'Lapin', 'Lièvre', 'Écureuil', 'Castor', 'Raton', 'Blaireau', 'Hérisson', 'Taupe', 'Chauve-souris', 'Manchot', 'Aigle', 'Faucon', 'Hibou', 'Chouette', 'Autruche', 'Flamant', 'Pélican', 'Albatros', 'Colibri', 'Perroquet', 'Toucan', 'Moineau', 'Rossignol', 'Canard', 'Oie', 'Cygne', 'Poule', 'Dinde', 'Paon', 'Serpent', 'Lézard', 'Caméléon', 'Crocodile', 'Alligator', 'Tortue', 'Grenouille', 'Crapaud', 'Salamandre', 'Truite', 'Saumon', 'Thon', 'Requin', 'Dauphin', 'Baleine', 'Phoque', 'Otarie', 'Pingouin', 'Pieuvre', 'Calmar', 'Méduse', 'Crabe', 'Homard', 'Crevette', 'Escargot', 'Limace', 'Araignée', 'Fourmi', 'Abeille', 'Papillon', 'Moustique', 'Ver'];

function getRandomWord(words) {
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

let motADeviner = getRandomWord(words).toLowerCase();


console.log("Le mot à deviner est : " + (motADeviner));
console.log("Ce nom d'animal contient " + (motADeviner.length) + " lettres. Aide le Fermier à le retrouver !");

let guessedLetters = [];
let remainingAttempts = 6;
let wordDisplay = new Array(motADeviner.length).fill('_');

document.getElementById('word').textContent = wordDisplay.join(' ');
document.getElementById('remainingAttempts').textContent = remainingAttempts;

document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre

    let guessInput = document.getElementById('guessInput');
    let guessedLetter = guessInput.value.toLowerCase();
    guessInput.value = ''; // Effacer le champ de saisie après chaque soumission

    if (guessedLetters.includes(guessedLetter)) {
        document.getElementById('message').textContent = 'Vous avez déjà proposé cette lettre.';
    } else if (motADeviner.includes(guessedLetter)) {
        document.getElementById('message').textContent = '';
        updateWordDisplay(guessedLetter);
    } else {
        document.getElementById('message').textContent = `La lettre '${guessedLetter}' n'est pas dans le mot.`;
        remainingAttempts--;
    }

    guessedLetters.push(guessedLetter);
    document.getElementById('guessedLetters').textContent = guessedLetters.join(', ');
    document.getElementById('remainingAttempts').textContent = remainingAttempts;

    checkGameStatus();
});

function updateWordDisplay(letter) {
    for (let i = 0; i < motADeviner.length; i++) {
        if (motADeviner[i] === letter) {
            wordDisplay[i] = letter;
        }
    }
    document.getElementById('word').textContent = wordDisplay.join(' ');
}

function checkGameStatus() {
    if (wordDisplay.join('') === motADeviner) {
        document.getElementById('message').textContent = 'Félicitations ! Vous avez deviné le mot.';
        endGame();
    } else if (remainingAttempts === 0) {
        document.getElementById('message').textContent = `Dommage ! Le mot était '${motADeviner}'.`;
        endGame();
    }
}

function endGame() {
    document.getElementById('guessForm').removeEventListener('submit', function(event) {
        event.preventDefault();
    });
    document.getElementById('guessInput').disabled = true;
}