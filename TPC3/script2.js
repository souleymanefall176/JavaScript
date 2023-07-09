let classe = {
  code: "L1 GL",
  nom: "Licence 1 Génie Logiciel",
  nbEtP: 50,
  tabEt: [],
};

//creer un etudiant (objet)

let etudiant = {
  matricule: "ET001",
  prenom: "Fatou",
  nom: "Ndiaye",
  moy: 15.5,
};

//Ajout d'un etudiant dans une classe
classe.tabEt.push(etudiant);
etudiant = {
  matricule: "ET002",
  prenom: "Aicha",
  nom: "Dieng",
  moy: 16.3,
};
classe.tabEt.push(etudiant);
let classe2 = {
  code: "L2 GL",
  nom: "Licence 2 Génie Logiciel",
  nbEtP: 30,
  tabEt: [],
};
etudiant = {
  matricule: "ET003",
  prenom: "Laye",
  nom: "Gaye",
  moy: 16.4,
};
classe2.tabEt.push(etudiant);
///tableau de classes

let tabClasses = [];
tabClasses.push(classe);
tabClasses.push(classe2);

//affichage tableau de classes

//recuperation de la division id=contenu

let divContenu = document.getElementById("contenu");
let selectClass = document.getElementById("selectClass");
//fonction remplir la liste deroulante des classes
function remplirListeDeroulante() {
  selectClass.innerHTML = "";
  tabClasses.forEach((cl) => {
    // selectClass.innerHTML += `<option value="${cl.code}">${cl.code}</option>`;

    // Methode 2 ajout child
    let elt = document.createElement("option");
    elt.value = cl.code;
    elt.innerText = cl.code;

    selectClass.appendChild(elt);
  });
}

remplirListeDeroulante();
onChangeClass();
//cet fonction est appele lorsqu'on choisis une classe dans la liste
function onChangeClass() {
  // Recuperer le code de la classe choisie dans la liste deroulante
  let codeClassChoisi = selectClass.value;
  //Recherche classe à partir du code
  //let classe = tabClasses.filter(c => c.code == codeClassChoisi);//Retourne un tableau de classes contenant toutes les classes dont le code = au code choisi dans la liste
  let classe = tabClasses.find((c) => c.code == codeClassChoisi); //retourne une seule classe
  afficheClass(classe);
}
//affichage de la classe
function afficheClass(cl) {
  console.log(cl);
  divContenu.innerHTML = `<div class="row">
      <div class="col">
          <div class="card border-2 border-primary">
            <div class="card-header">
              <h4>${cl.code}</h4>
              <h6>${cl.nom}</h6>
            </div>
            <div class="card-body">
              <span>Etudiants Prévus : </span
              ><span class="text-primary">${cl.nbEtP}</span><br />
              <span>Etudiants Inscrits : </span
              ><span class="text-primary">${cl.tabEt.length}</span><br />

              <h4 class="mt-3 text-center text-primary">LISTE DES ETUDIANTS</h4>
              <div class="row float-right">
                <button type="button" class="btn btn-primary btn-sm " onclick="clickNouveauEtudiant('a')">Nouveau
                  Etudiant</button>
              </div>

              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Matricule</th>
                    <th>Prenom</th>
                    <th>Nom</th>
                    <th>Moyenne</th>
                  </tr>
                </thead>

                <tbody class="bodycontenu">
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>`;

  let bodyContenu = document.querySelector(".bodycontenu");
  for (let j = 0; j < cl.tabEt.length; j++) {
    let et = cl.tabEt[j];
    bodyContenu.innerHTML += `
        <!--parcourir le tableaux des etudiants el les afficher-->

          <tr>
            <td>${j + 1}</td>
            <td>${et.matricule}</td>
            <td>${et.prenom}</td>
            <td>${et.nom}</td>
            <td>${et.moy}</td>
          </tr>
        `;
  }
  bodyContenu.removeAttribute("class");
}

let formClass = document.getElementById("formAjoutCl");
let codeCl = document.getElementById("codeCl");
let nomCl = document.getElementById("nomCl");
let nbETCl = document.getElementById("nbETCl");

function clickNouvelleClasse(type) {
  if (type == "a") {
    formClass.removeAttribute("hidden");
  } else {
    formClass.setAttribute("hidden", "");
  }
}

function enregistrerClass() {
  let cl = {
    code: codeCl.value,
    nom: nomCl.value,
    nbEtP: nbETCl.value,
    tabEt: [],
  };

  tabClasses.push(cl);
  alert("Classe " + codeCl.value + " ajoutée avec succés !");
  remplirListeDeroulante();
  codeCl.value = "";
  nomCl.value = "";
  nbETCl.value = "";
}

let formET = document.getElementById("formAjoutEt");
let matriculeET = document.getElementById("matriculeET");
let nomET = document.getElementById("nomET");
let prenomET = document.getElementById("prenomET");
let moyenneET = document.getElementById("moyET");

function clickNouveauEtudiant(type) {
  if (type == "a") {
    formET.removeAttribute("hidden");
  } else {
    formET.setAttribute("hidden", "");
  }
}
function enregistrerEtudiant() {
  if (
    matriculeET.value.trim() == "" ||
    nomET.value.trim() == "" ||
    prenomET.value.trim() == ""
  ) {
    alert("Tous les champs sont obligatoires");
  } else {
    let etudiant = {
      matricule: matriculeET.value.trim(),
      prenom: prenomET.value.trim(),
      nom: nomET.value.trim(),
      moy: moyenneET.value,
    };
    let codeClassChoisi = selectClass.value;
    let classe = tabClasses.find((c) => c.code == codeClassChoisi); //retourne une seule classe
    console.log(classe.tabEt);
    classe.tabEt.push(etudiant);
    afficheClass(classe);
    matriculeET.value = "";
    prenomET.value = "";
    nomET.value = "";
    moyenneET.value = "";
  }
}
