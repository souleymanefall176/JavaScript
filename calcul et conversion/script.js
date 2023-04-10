//DECLARATION
const calculer = document.getElementById("calculer");
const operation = document.getElementById("operation");
let operationSigne;
const valeur1 = document.getElementById("valeur1");
let valeur_1;
const valeur2 = document.getElementById("valeur2");
let valeur_2;
const resultat = document.getElementById("resultat");
const decimal = document.getElementById("decimal");
let valeur_decimal;
const binaire = document.getElementById("binaire");

//OPERATION
operation.addEventListener("input", (e) => {
  operationSigne = e.target.value;
});
valeur1.addEventListener("input", (e) => {
  valeur_1 = parseInt(e.target.value);
});
valeur2.addEventListener("input", (e) => {
  valeur_2 = parseInt(e.target.value);
});

calculer.addEventListener("click", (e) => {
  e.preventDefault();

  switch (operationSigne) {
    case "Addition":
      resultat.value = valeur_1 + valeur_2;
      break;
    case "Soustraction":
      resultat.value = valeur_1 - valeur_2;
      break;
    case "Multiplication":
      resultat.value = valeur_1 * valeur_2;
      break;
    case "Division":
      resultat.value = valeur_1 / valeur_2;
      break;
    case "Modulo":
      resultat.value = valeur_1 % valeur_2;
      break;
    default:
      alert("Valeur non prise en compte");
      break;
  }
});

//CONVERSION
decimal.addEventListener("keydown", (e) => {
  valeur_decimal = parseInt(e.target.value);

  if (e.key === "Enter") {
    let reste = 0;
    let valBinaire = 0;
    let i = 1;
    while (valeur_decimal !== 0) {
      reste = valeur_decimal % 2;
      valBinaire = valBinaire + reste * i;
      i = i * 10;
      valeur_decimal = Math.floor(valeur_decimal / 2);
    }

    binaire.value = valBinaire;
  }
});
// decimal.addEventListener("input", (e) => {
//   valeur_decimal = parseInt(e.target.value);

//   let reste = 0;
//   let valBinaire = 0;
//   let i = 1;
//   while (valeur_decimal !== 0) {
//     reste = valeur_decimal % 2;
//     valBinaire = valBinaire + reste * i;
//     i = i * 10;

//     valeur_decimal = parseInt(valeur_decimal / 2);

//     // valeur_decimal = Math.floor(valeur_decimal / 2);
//   }
//   binaire.value = valBinaire;
// });
