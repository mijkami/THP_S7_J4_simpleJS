// 	 Créer un script script_1.js qui 
// affichera  "Bonjour, monde !" dans la console:

console.log("Bonjour, monde !");


//   Customise le script script_1.js qui te demandera 
// ton prénom avec un prompt. 
//   Tu stockeras cette entrée dans une variable 
// et tu afficheras : "Bonjour, prénom !" dans la console.


let prénom = "";
while(true) {
  prénom = prompt('Quel est ton prénom ?');
  console.log(`Bonjour, ${prénom} !`);
  break;
} 


