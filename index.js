// alert("Salut JS");

console.log("coucou");

// Kamel Case
let maSuperVariable = "Hello";

// ** Les Variables **

// var = vieux JS
var unTexte = "voici un texte";

// cons = constante
const prenom = "Justine";

// Let = La variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "je suis une chaine de caractères";

let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voila c'était le contenu";

//  Concaténation avec guillemets altgr+7
let autreConcatenation = `Chaine précédente : ${chaine} . Voila c'était le contenu`;

// ** Types de données **
let string = "Je suis une chaine de caractère";
let number = 24;
let boolean = true;

// Tableau : il y a des crochets []
let array = ["je", "suis", 47, false];

// Objet : accolades {}
let object = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

let arbre;

arbre = "sapin";

// ** Les opérateurs **
console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
// puissance
console.log(4 ** 5);

// ** Opérateurs d'affectations **
let total = 0;

total = total + 1;
total++;

total += 5;
total -= 4;
total *= 2;

console.log(total);

// ** Structures de controle **
let x = 2;
let y = 2;

// if (x > y) {
//   alert("YES x plus gros que y");
// } else if (y > x) {
//   alert("Y plus grand !");
// } else {
//   alert("ILS SONT EGAUX");
// }

if (x) {
  console.log("x existe !");
}

// === teste l'égalité en type et contenue
if (x === y) {
  console.log("ils sont égaux");
} else {
  console.log("pas égaux");
}

let a = 2;
let b = 2;
// == teste l'égalité de valeur sans prendre en compte le type
if (a == b) {
  console.log("ils sont égaux");
} else {
  console.log("pas égaux");
}

// || ou
// && et

// Soit l'un soit l'autre
if (x < y || x > 1) {
  console.log("UI");
}

// Il faut que toutes les conditions soit réunies
if (x < y && x > 1) {
  console.log("UI");
}

// ** les fontions **

// fonction classique (à l'ancienne)
function faireQuelqueChose() {
  console.log("je fais un truc");
  console.log(5 + 6);
  alert("Calcule terminé !");
}

// Il faut impérativement appeler la fonction pour qu'elle se joue
// appel de la fonction : faireQuelqueChose();

// fonction fléchée
const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 3);
addition(432, 578481);

// ** La portée des variables **

function add2() {
  let num = 4;
  console.log(num + 2);
}


