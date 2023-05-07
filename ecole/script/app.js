const classe = document.getElementById("classe");
const l1 = document.getElementById("L1");
const l2 = document.getElementById("L2");
const l3 = document.getElementById("L3");
const filiere = document.getElementById("filiere");
const msgErrfil = document.getElementById("msgErrfil");
const NbrEt = document.getElementById("NbrEt");
const msgErrNbrEt = document.getElementById("msgErrNbrEt");
const codeEt = document.getElementById("codeEt");
const nomEt = document.getElementById("nomEt");
const msgErrNom = document.getElementById("msgErrNom");
const prenomEt = document.getElementById("prenomEt");
const msgErrPre = document.getElementById("msgErrPre");
const birdthdayEt = document.getElementById("birdthdayEt");
const moyEt = document.getElementById("moyEt");
const msgErrMoy = document.getElementById("msgErrMoy");
const enregistrer = document.getElementById("enregistrer");
const afficher = document.getElementById("afficher");
const annuler = document.getElementById("annuler");
const affichage = document.getElementById("affichage");
const table = document.getElementById("table");
const codevalue = "";
let i = 1;

//**************************PARTIE FONCTION DEBUT
//fonction qui verifie si tous les champs ont été saisit
function checkChamp() {
  if (
    classe.value !== "" &&
    filiere.value !== "" &&
    NbrEt.value.trim() !== "" &&
    NbrEt.value.trim() !== "" &&
    nomEt.value.trim() !== "" &&
    prenomEt.value.trim() !== "" &&
    birdthdayEt.value != "" &&
    moyEt.value.trim() !== ""
  ) {
  } else {
    alert("Tous les champs sont obligatoires!!!");
  }
}
//fonction qui verifie si la filiere saisit est genie logiciel ou cybersecurite
function checkFiliere(chaine) {
  let ok = 0;
  if (
    chaine.toUpperCase() !== "GENIE LOGICIEL" &&
    chaine.toUpperCase() !== "CYBERSECURITE"
  ) {
    ok = 0;
  } else {
    ok = 1;
  }
  return ok;
}
//fonction qui verifie si pour nom et prenom on a que des caracteres alphabetiques
function checkAlphabet(chaine) {
  let ok = 0;
  for (let i = 0; i < chaine.length; i++) {
    if (chaine[i].toUpperCase() >= "A" && chaine[i].toUpperCase() <= "Z") {
      ok = 1;
    } else {
      ok = 0;
      break;
    }
  }
  return ok;
}
//fonction qui verifie si le nombre d'etudiants est composé que de chiffre et est >=0
function checkNbrEt(nbr) {
  let ok = 0;
  if (Number(nbr) > 0) {
    for (let i = 0; i < nbr.length; i++) {
      if (nbr[i] >= "0" && nbr[i] <= "9") {
        ok = 1;
      } else {
        ok = 0;
        break;
      }
    }
  } else {
    ok = 0;
  }
  return ok;
}

//**************************PARTIE FONCTION FIN

//**************************PARTIE ECOUTEUR D'EVENEMENTS DEBUT

//bouton afficher pour montrer l'etudiant enregistrer dans un tableau
//evenement declenche à la saisit du prenom
prenomEt.addEventListener("keyup", (e) => {
  if (checkAlphabet(prenomEt.value) === 0) {
    msgErrPre.removeAttribute("hidden");
  } else {
    msgErrPre.setAttribute("hidden", true);
  }
});
prenomEt.addEventListener("blur", (e) => {
  codeEt.value =
    prenomEt.value[0].toUpperCase() +
    nomEt.value.toUpperCase() +
    classe.value.toUpperCase();
  if (filiere.value.toUpperCase() === "GENIE LOGICIEL") {
    codeEt.value += "GL" + i;
  } else {
    codeEt.value += "CS" + i;
  }
  i++;
});
nomEt.addEventListener("keyup", (e) => {
  if (checkAlphabet(nomEt.value) === 0) {
    msgErrNom.removeAttribute("hidden");
  } else {
    msgErrNom.setAttribute("hidden", true);
  }
});

//evenement declencher à la saisit de la filiere
filiere.addEventListener("keyup", (e) => {
  if (checkFiliere(filiere.value) === 0) {
    msgErrfil.removeAttribute("hidden");
  } else {
    msgErrfil.setAttribute("hidden", true);
  }
});
//evenement declencher à la saisit du nombre d'etudiants
NbrEt.addEventListener("keyup", (e) => {
  if (checkNbrEt(NbrEt.value) === 0) {
    msgErrNbrEt.removeAttribute("hidden");
  } else {
    msgErrNbrEt.setAttribute("hidden", true);
  }
});

//evenement declencher au click d' afficher
afficher.addEventListener("click", (e) => {
  e.preventDefault();
  affichage.removeAttribute("hidden");
});
//bouton enregistrer pour enregistrer l'etudiant
enregistrer.addEventListener("click", (e) => {
  e.preventDefault();
  let ligne = document.createElement("tr");
  table.appendChild(ligne);
  ligne.innerHTML = `
    <td>${codeEt.value}</td>
    <td>${classe.value}</td>
    <td>${filiere.value}</td>
    <td>${nomEt.value}</td>
    <td>${prenomEt.value}</td>
    <td>${birdthdayEt.value}</td>
    <td>${moyEt.value}</td>`;
});
//**************************PARTIE ECOUTEUR D'EVENEMENTS FIN
