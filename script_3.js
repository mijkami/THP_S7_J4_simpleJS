// Voici ce que devra afficher la console
// "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
// Utilisateur rentre un nombre (par ex 5)


function createMarioHalfPyramid (height) {
  
  for (var i = 1; i <= height; i++) {
    var row = '';
    
    for (var j = 1; j <= (height - i); j++) {
      row += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      row += '#';
    }
    
    console.log(row);
  }
}
console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let inputNumber = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");


createMarioHalfPyramid(inputNumber);