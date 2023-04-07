//DECLARATION DE VARIABLE START---------------------------
var ajout = document.getElementById("ajout");
var contain = document.getElementById("matiere");
var moyenne = document.getElementById("resultat");
var coefElements = document.querySelectorAll(".mat1 select[name='coef']");
var note1 = document.querySelector(".note1");
var note2 = document.querySelector(".note2");
var note3 = document.querySelector(".note3");
var sommeCoef = 0;
var noteElement = 0;
var resultat;
var moy;
var calculer = document.getElementById("calculer");
//DECLARATION DE VARIABLE END---------------------------

// Fonction pour recalculer la somme des coefficients à chaque fois qu'un élément est modifié
function calculerSommeCoef() {
  sommeCoef = 0;
  noteElement = 0;
  coefElements.forEach(function (element) {
    var coefValue = parseInt(element.value);
    sommeCoef += coefValue;
    noteElement = (((note1 + note2) / 2 + note3) / 2) * coefValue;
  });

  console.log("Somme des coefficients : " + sommeCoef);
  console.log("Somme des notes : " + noteElement);
}

// Ajouter un événement "change" à tous les éléments "select" avec l'attribut "name='coef'"
coefElements.forEach(function (coefElement) {
  coefElement.addEventListener("change", function () {
    calculerSommeCoef();
  });
});

ajout.addEventListener("click", () => {
  var ligne = document.createElement("div");
  ligne.classList.add("mat1");
  contain.appendChild(ligne);
  ligne.innerHTML = `
    <input type="text" class="nom" placeholder="Matiere" />
    <select name="coef" id="coef">
      <option value="0">coef</option>
      <option value="2">coef 2</option>
      <option value="3">coef 3</option>
      <option value="4">coef 4</option>
    </select>
    <input type="text" class="note note1" placeholder="Note devoir 1" />
          <input type="text" class="note note2" placeholder="Note devoir 2" />
          <input type="text" class="note note3" placeholder="Note Exam" />
  `;

  // Mettre à jour la liste des éléments "select" avec l'attribut "name='coef'"
  coefElements = document.querySelectorAll(".mat1 select[name='coef']");

  // Ajouter un événement "change" au nouvel élément "select" ajouté
  var nouvelElement = coefElements[coefElements.length - 1];
  nouvelElement.addEventListener("change", function () {
    calculerSommeCoef();
  });
});

// Calculer la moyenne
calculer.addEventListener("click", () => {
  // ... (code pour calculer la moyenne en utilisant les valeurs des notes et la somme des coefficients)
});
