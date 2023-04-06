//DECLARATION START -------------------------------------
var categorie = document.getElementById("categorie");
var nuit = document.getElementById("nuit");
var calcule = document.getElementById("calcule");
var montant = document.getElementById("montant");
var nbrJour = document.getElementById("nbrJour");
var enregistrer = document.getElementById("enregistrement");
var container = document.getElementById("table");
var annuler = document.getElementById("annule");
var numero = 0;
var valNuit;
let valMontant;
let valCategorie = "";

//DECLARATION END -------------------------------------

//FONCTION START -------------------------------------

categorie.addEventListener("input", (e) => {
  valCategorie = e.target.value;
  if (valCategorie === "Chambre Simple") {
    nuit.placeholder = "20000";
    valNuit = 20000;
  } else if (valCategorie === "Chambre Double") {
    nuit.placeholder = "30000";
    valNuit = 30000;
  } else {
    nuit.placeholder = "50000";
    valNuit = 50000;
  }
});
calcule.addEventListener("click", (e) => {
  e.preventDefault();
  valMontant = nbrJour.value * valNuit;
  montant.placeholder = valMontant;
});
enregistrer.addEventListener("click", (e) => {
  e.preventDefault();
  numero++;
  var ligne = document.createElement("tr");
  container.appendChild(ligne);
  ligne.innerHTML = `
    <td>Numero : ${numero}</td>
    <td>Date : ${dateReservation.value}</td>
    <td>Nombre de jour : ${nbrJour.value}</td>
    <td>Prenom : ${prenomClient.value}</td>
    <td>Nom : ${nomClient.value}</td>
    <td>Tel : ${telClient.value}</td>
    `;
});
annuler.addEventListener("click", (e) => {});
//FONCTION END -------------------------------------
