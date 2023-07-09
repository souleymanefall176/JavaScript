/*PARTIE DECLARATIVE DES VARIABLES DEBUT*/
const hopital = document.getElementById("hopital");
const nouveauMedecin = document.getElementById("nouveauMedecin");
const principal = document.getElementById("principal");
const bodycontenu = document.getElementById("bodycontenu");
const ajoutMedecin = document.getElementById("ajoutMedecin");
const medecinInscrits = document.getElementById("medecinInscrits");
const ajoutRV = document.getElementById("ajoutRV");
const penomEtNom = document.getElementById("prenomEtNom");
const listeRV = document.getElementById("listeRV");
const date = document.getElementById("date");
const heure = document.getElementById("heure");
const patient = document.getElementById("patient");
const diagnostic = document.getElementById("diagnostic");
const specialite = document.getElementById("specialite");
const enregistrerSpecialite = document.getElementById("enregistrerSpecialite");
const prenomMedecin = document.getElementById("prenomMedecin");
const nomMedecin = document.getElementById("nomMedecin");
const specialiteMedecin = document.getElementById("specialiteMedecin");
const msgErrPrenom = document.getElementById("msgErrPrenom");
const msgErrNom = document.getElementById("msgErrNom");
const msgErrSpecialite = document.getElementById("msgErrSpecialite");
const EnvoyerMedecin = document.getElementById("EnvoyerMedecin");
const annulerMedecin = document.getElementById("annulerMedecin");
const enregistrerRV = document.getElementById("enregistrerRV");

let medecins = [];
let valeursAppeleesRV = []; //tableau ou on stocke les valeurs de a pour les quels on a ecoute un evenement
let valeursAppeleesEN = [];
let rendezVS = [];
let classe;
let adresse;
let rV1 = [];
let a = 0;
let j = 0; //pour medecin
let l = 0; //pour identifiant rendez vous
let indicesMedecins = []; // Tableau pour stocker les indices spécifiques à chaque médecin
let k = 0;
let g;
/*PARTIE DECLARATIVE DES VARIABLES FIN*/

/*PARTIE DES FONCTIONS DE CONTROLE DEBUT */
//fonction qui permet de verifier si les champs sont vides ou pas
function checkChamp() {
  let ok = 0;
  if (
    prenomMedecin.value.trim() !== "" &&
    nomMedecin.value.trim() !== "" &&
    specialiteMedecin.value.trim() !== ""
  ) {
    ok = 0;
  } else {
    alert("Tous les champs sont obligatoires!!!");
    ok = 1;
  }
  return ok;
}
//fonction qui permet de verifier si la specialite estpediatre ou cardiologue
function checkSpecialite(chaine) {
  let ok = 0;
  if (
    chaine.toUpperCase() !== "PEDIATRE" &&
    chaine.toUpperCase() !== "CARDIOLOGUE"
  ) {
    ok = 1;
  } else {
    ok = 0;
  }
  return ok;
}
//fonction qui verifie si pour nom et prenom on a que des caracteres alphabetiques
function checkAlphabet(chaine) {
  let ok = 0;
  for (let i = 0; i < chaine.length; i++) {
    if (chaine[i].toUpperCase() >= "A" && chaine[i].toUpperCase() <= "Z") {
      ok = 0;
    } else {
      ok = 1;
      break;
    }
  }
  return ok;
}
//controle saisie champ nom
nomMedecin.addEventListener("blur", (e) => {
  if (checkAlphabet(nomMedecin.value) === 1) {
    msgErrNom.removeAttribute("hidden");
  } else {
    msgErrNom.setAttribute("hidden", true);
  }
});
//controle saisie champ specialite
specialite.addEventListener("blur", (e) => {
  if (checkSpecialite(specialite.value) === 1) {
    msgErrSpecialite.removeAttribute("hidden");
  } else {
    msgErrSpecialite.setAttribute("hidden", true);
  }
});
//controle saisie champ prenom
prenomMedecin.addEventListener("blur", (e) => {
  if (checkAlphabet(prenomMedecin.value) === 1) {
    msgErrPrenom.removeAttribute("hidden");
  } else {
    msgErrPrenom.setAttribute("hidden", true);
  }
});

/*PARTIE DES FONCTIONS DE CONTROLE FIN */

//Pour ajouter un nouveau medecin
nouveauMedecin.addEventListener("click", (e) => {
  e.preventDefault();
  ajoutMedecin.removeAttribute("hidden");
  /*if (!ajoutRV.hasAttribute("hidden")) {
    ajoutRV.setAttribute("hidden", "");
  }*/
  enregistrerSpecialite.addEventListener("click", (e) => {
    e.preventDefault();
    if (checkSpecialite(specialite.value) === 0) {
      specialiteMedecin.value = specialite.value;
      specialite.value = "";
    }
  });

  //evenement declanché quand on clique sur enregistrer
  EnvoyerMedecin.addEventListener("click", (e) => {
    e.preventDefault();
    //vérification de la validité du formulaire
    if (
      checkAlphabet(prenomMedecin.value) === 0 &&
      checkAlphabet(nomMedecin.value) === 0 &&
      checkSpecialite(specialiteMedecin.value) === 0 &&
      checkChamp(prenomMedecin.value) === 0 &&
      checkChamp(nomMedecin.value) === 0 &&
      checkChamp(specialiteMedecin.value) === 0
    ) {
      let medecin = {
        prenom: prenomMedecin.value,
        nom: nomMedecin.value,
        code:
          "M" +
          prenomMedecin.value[0].toUpperCase() +
          nomMedecin.value[0].toUpperCase() +
          nomMedecin.value[1].toUpperCase() +
          (nomMedecin.value.length >= 3
            ? nomMedecin.value[2].toUpperCase()
            : "@") +
          (j + 1),
        specialite: specialiteMedecin.value,
        action: `${l}`, //ça permet de recuperer l'identifiant du medecin à la quelle on a ajoute un rendez vous
      };
      medecins.push(medecin);
      medecinInscrits.innerHTML = j + 1;
      j++;

      bodycontenu.innerHTML += `<tr class="h5">
          <td>${j}</td>
          <td>${medecin.code}</td>
          <td>${medecin.prenom}</td>
          <td>${medecin.nom}</td>
          <td>${medecin.specialite}</td>
          <td>
            <button type="submit" class="btn btn-success text-center " onclick="rendezVousMed(${a})">
              Rendez-vous
            </button>
          </td>
        </tr>`;
      indicesMedecins[a] = 1;
      a++;
      l++;
    } else {
      alert("Erreur : Veuillez remplir correctement tous les champs !");
    }
    prenomMedecin.value = "";
    nomMedecin.value = "";
    specialiteMedecin.value = "";

    console.table(indicesMedecins);
  });

  annulerMedecin.addEventListener("click", (e) => {
    e.preventDefault();
    ajoutMedecin.setAttribute("hidden", "");
    hopital.removeAttribute("hidden");
    listeRV.removeAttribute("hidden");
  });
});

//fonction pour rendez vous pour chaque medecin

function rendezVousMed(a) {
  if (!ajoutMedecin.hasAttribute("hidden")) {
    ajoutMedecin.setAttribute("hidden", "");
  }
  if (!valeursAppeleesRV.includes(a)) {
    classe = "classe" + a;

    listeRV.innerHTML += `<div class="col mt-3">
        <div class="card border-2 border-primary">
            <div class="card-header bg-light h6">
                <span>Médecin : </span><span id="prenomEtNom">${medecins[a].prenom} ${medecins[a].nom}</span><br />
                <span>Specialite : </span><span>${medecins[a].specialite}</span><br />
            </div>
            <div class="card-body">
                <h4 class="text-primary text-center">Liste des Rendez-Vous</h4>
                <div class="row">
                <div class="col-10"></div>
                <div class="col">
                    <button
                    type="submit"
      class="btn btn-danger btn-sm"
      onclick="rendezVousCreer(${a})"
    >
      Ajouter Rendez-Vous
    </button>
  </div>
</div>
<table
  class="table table-bordered border-2 border-danger bg-light text-center mt-3"
>
  <thead>
    <tr class="h4">
      <th>Numero</th>
      <th>Date</th>
      <th>Heure</th>
      <th>Patient</th>
      <th>Diagnostic</th>
    </tr>
  </thead>

  <tbody id="${classe}">
      
  </tbody>
</table>
</div>
</div>
</div><br/>`;
  }

  rV1.push(classe);
  valeursAppeleesRV.push(a);

  a++;
}
//fonction pour avoir rendez vous

function rendezVousCreer(a) {
  k = 0;

  if (!ajoutMedecin.hasAttribute("hidden")) {
    ajoutMedecin.setAttribute("hidden", "");
  }
  ajoutRV.removeAttribute("hidden");
  adresse = document.getElementById(`${rV1[a]}`);

  console.table(indicesMedecins);
  enregistrerRV.addEventListener("click", (e) => {
    e.preventDefault();

    //a = 0;

    let rv = {
      date: date.value,
      heure: heure.value,
      patient: patient.value,
      diagnostic: diagnostic.value,
    };
    rendezVS.push(rv);
    date.value = "";
    heure.value = "";
    patient.value = "";
    diagnostic.value = "";
    console.table(rendezVS);

    if (rendezVS[k].date !== "") {
      adresse.innerHTML += `<tr class="h4">
  <th>${indicesMedecins[a]}</th>
  <th>${rendezVS[k].date}</th>
  <th>${rendezVS[k].heure}</th>
  <th>${rendezVS[k].patient}</th>
  <th>${rendezVS[k].diagnostic}</th>
</tr>
      
 `;
    }

    // Incrémentation de l'indice spécifique au médecin en cours
    rendezVS = [];

    ajoutRV.setAttribute("hidden", "");
  });
}
//fonction pour enregistrer un rv dans un tableau

/*PARTIE FONCTION HOPITAL */
