// Un prompt s'affiche avec la question suivante
// "De quel nombre veux-tu calculer la factorielle ?"

// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
// "Le résultat est : 24"

let inputNumber = prompt('De quel nombre (entier) veux-tu calculer la factorielle ?');
let total = 1;

for (i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);
}

console.log('Le résultat est : ' + total);
