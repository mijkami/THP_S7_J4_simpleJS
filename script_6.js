const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];



// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
let count = 0;
entrepreneurs.forEach(entrepreneur => {
  if (entrepreneur["year"] >= 1970 && entrepreneur["year"] <= 1979)
  count ++;
})
console.log("1 - Il y a eu " + count + " entrepreneurs nés dans les années 1970.");


// Sors une array qui liste(?) le prénom et le nom des entrepreneurs
let nameArray = [];
entrepreneurs.forEach(entrepreneur => {
  nameArray.push(`${entrepreneur["first"]} ${entrepreneur["last"]}`);
})
console.log("2 - Noms/prénoms des entrepreneurs sous forme de tableau :");
console.log(nameArray);


// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("3 - Âge actuel des entrepreneurs :");
entrepreneurs.forEach(entrepreneur => {
  console.log(`${entrepreneur["first"]} ${entrepreneur["last"]}: ${new Date().getFullYear()-entrepreneur["year"]}`)
})


// Trie les inventeurs par ordre alphabétique du nom de famille
console.log("4 - Tri par ordre alphabétique des familles :");
console.log(entrepreneurs.sort(function (a, b) {
  return a.last.localeCompare(b.last);
  })
);

// console.log(entrepreneurs.sort(function(a, b){
//     if(a.first < b.first) { return -1; }
//     if(a.first > b.first) { return 1; }
//     return 0;
// })
// );