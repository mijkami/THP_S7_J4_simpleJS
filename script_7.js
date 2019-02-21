const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


// Est-ce que tous les livres ont été au moins empruntés une fois ?
let borrowedBook = 0;
let answer = "Non";
books.forEach(book => {
  if (book["rented"] > 0) {
    borrowedBook ++;
  }
  if (borrowedBook === books.length) {
    answer = "Oui";
  }
})
console.log(`Est-ce que tous les livres ont été au moins empruntés une fois ? ${answer}.`);


// Quel est livre le plus emprunté ?
let maxBorrow = 0;
let maxTitle;
books.forEach(book => {
  if (book["rented"] > maxBorrow) {
    maxBorrow = book["rented"]
    maxTitle = book["title"]
  }
})
console.log(`1 - Le livre le plus emprunté est '${maxTitle}', qui a été emprunté ${maxBorrow} fois.`);


// Quel est le livre le moins emprunté ?
let minBorrow = 100000000;
let minTitle;
books.forEach(book => {
  if (book["rented"] < minBorrow) {
    minBorrow = book["rented"]
    minTitle = book["title"]
  }
})
console.log(`2 - Le livre le moins emprunté est '${minTitle}', qui a été emprunté ${minBorrow} fois.`);


// Trouve le livre avec l'ID: 873495
let bookIdTitle;
books.forEach(book => {
  if (book["id"] === 873495) {
    bookIdTitle = book["title"]
  }
})
console.log(`3 - Le livre avec l'ID '873495' est : ${bookIdTitle}`);


// Supprime le livre avec l'ID: 133712
let indexDelete;
books.forEach(book => {
  if (book["id"] === 133712) {
    books.splice(books.indexOf(book),1);
  }
})
console.log("4 - Suppression du livre avec l'ID '133712'");


// Trie les livres par ordre alphabétique
// console.log(books.sort(function (a, b) {
//   return a.title.localeCompare(b.title);
// })
// );
// console.log("5 - Tri des livres par ordre alphabétique");
// console.log(books);