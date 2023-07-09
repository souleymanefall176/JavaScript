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
//remplir la liste deroulante des classes
tabClasses.forEach((cl) => {
  //methode 1 innerHTML
  selectClass.innerHTML += `<option value="${cl.code}">${cl.code}</option>`;
  //methode 2 utilise tres rarement permettant d'ajouter des fils
  //   let elt = document.createElement("option");
  //   elt.value = cl.code;
  //   elt.innerText = cl.code;
  //   selectClass.appendChild(elt);
});
//fonction appele lors qu'on choisie une classe dans la liste
function onChangeClass() {
  let codeClasseChoisi = selectClass.value;
  //demander explication à chatGPT
  let classe = tabClasses.filter((c) => c.code == codeClasseChoisi); // Retourne un tableau de classe contenant toutes les classes dont le code = au code choisi dans la liste
  afficherListe(classe[0]);
}
function afficherListe(cl) {
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
      <!--parcourir le tableau des etudiants el les afficher-->
                
        <tr>
          <td>${j}</td>
          <td>${et.matricule}</td>
          <td>${et.prenom}</td>
          <td>${et.nom}</td>
          <td>${et.moy}</td>
        </tr>
      `;
  }
  bodyContenu.removeAttribute("class");
}
// for (let i = 0; i < tabClasses.length; i++) {}
