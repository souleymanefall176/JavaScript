// let bouton = document.getElementById("button");
// let positionnement = document.querySelector(".bouton1");
// let main = document.querySelector("body");
// let bodyform = document.querySelector(".card-body");
// let effacer = document.querySelector(".btn-warning");
// let formulaire = document.querySelector(".form-control");

// bouton.addEventListener("click", (e) => {
//   e.preventDefault();
//   positionnement.classList.toggle("bouton");
//   bouton.classList.toggle("push");
//   bodyform.classList.toggle("principal");
//   main.classList.toggle("principal");
// });

// function enregistrer() {
//   let nom = document.getElementById("nom").value;
//   let prenom = document.getElementById("prenom").value;
//   let mail = document.getElementById("mail").value;
//   let tel = document.getElementById("tel").value;
//   let password = document.getElementById("password").value;
//   let personne = {
//     nom: nom,
//     prenom: prenom,
//     mail: mail,
//     tel: tel,
//     password: password,
//   };

//   let personneJson = JSON.stringify(personne);
//   localStorage.setItem("stockage", personneJson);
// }

// function afficher() {
//   let personneJson = localStorage.getItem("stockage");
//   let personne = JSON.parse(personneJson);
//   console.table([personne]);
// }
// effacer.addEventListener("click", (e) => {
//   nom.value = "";
//   prenom.value = "";
//   mail.value = "";
//   tel.value = "";
//   password.value = "";
// });

//correction
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const age = document.getElementById("age");
const email = document.getElementById("mail");
const nomUser = document.getElementById("nomUser");
const tel = document.getElementById("tel");
const password = document.getElementById("password");
const erreurPrenom = document.getElementById("erreurPrenom");
const erreurNom = document.getElementById("erreurNom");
const erreurAge = document.getElementById("erreurAge");
const erreurNomUser = document.getElementById("erreurNomUser");
const erreurTel = document.getElementById("erreurTel");
const erreurPassword = document.getElementById("erreurPassword");
const effacer = document.getElementById("effacer");
const bouton = document.getElementById("button");
const positionnement = document.querySelector(".bouton1");
const main = document.querySelector("body");
const bodyform = document.querySelector(".card-body");
const enregistre = document.getElementById("enregistre");
let i = 1;

bouton.addEventListener("click", (e) => {
  e.preventDefault();
  positionnement.classList.toggle("bouton");
  bouton.classList.toggle("push");
  bodyform.classList.toggle("principal");
  main.classList.toggle("principal");
});

//Erreur prenom
prenom.onblur = function () {
  if (checkAlphabet(prenom.value) === 0) {
    erreurPrenom.removeAttribute("hidden");
  } else {
    erreurPrenom.setAttribute("hidden", "");
  }
  nomUser.value = prenom.value[0];
  email.value = prenom.value;
};
//Erreur nom
nom.onblur = function () {
  if (checkAlphabet(nom.value) === 0) {
    erreurNom.removeAttribute("hidden");
  } else {
    erreurNom.setAttribute("hidden", "");
  }
  nomUser.value += nom.value + i;
  email.value += nom.value + i + "@groupeisi.com";
  i++;
};
//Erreur tel
tel.onblur = function () {
  if (checkTel(tel.value) === 0) {
    erreurTel.removeAttribute("hidden");
  } else {
    erreurTel.setAttribute("hidden", "");
  }
};
//Erreur password
password.onblur = function () {
  if (checkPassword(password.value) === 0) {
    erreurPassword.removeAttribute("hidden");
  } else {
    erreurPassword.setAttribute("hidden", "");
  }
};
//Erreur age
age.onblur = function () {
  if (checkAge(age.value) === 0) {
    erreurAge.removeAttribute("hidden");
  } else {
    erreurAge.setAttribute("hidden", "");
  }
};

//Fonction qui permet de verifier si une chaine est alphabetique
function checkAlphabet(text) {
  let ok = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      (text[i] >= "A" && text[i] <= "Z") ||
      (text[i] >= "a" && text[i] <= "z")
    ) {
      ok = 1;
    } else {
      ok = 0;
      break;
    }
  }
  return ok;
}
tel.addEventListener("keyup", (e) => {
  //on peut mettre e.shiftkey === true
  let touch = e.key.toUpperCase();
  if (
    touch !== "Shift" &&
    e.touch !== "capslock" &&
    e.touch !== "backspace" &&
    e.touch !== "enter"
  ) {
    if (!(e.key >= 0 && e.key <= 9)) {
      erreurTel.removeAttribute("hidden");
    } else {
      erreurTel.setAttribute("hidden", "");
    }
  }
});

function checkTel(num) {
  if (num.length === 9) {
  } else {
    return false;
  }
}
function checkPassword(psw) {
  let ok;
  if (
    psw.length === 5 &&
    psw[psw.length - 1] >= "0" &&
    psw[psw.length - 1] <= "9"
  ) {
    for (let i = 0; i < psw.length - 1; i++) {
      if (
        (psw[i] >= "a" && psw[i] <= "z") ||
        (psw[i] >= "A" && psw[i] <= "Z")
      ) {
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
function checkAge(age) {
  let ok;
  if (age >= 8 && age <= 100) {
    ok = 1;
  } else {
    ok = 0;
  }
  return ok;
}

enregistre.click = function () {
  let nomvalue = nom.value;
  let prenomvalue = prenom.value;
  let agevalue = age.value;
  let emailvalue = email.value;
  let nomUservalue = nomUser.value;
  let telvalue = tel.value;
  let passwordvalue = password.value;
  let personne = {
    nomvalue: nomvalue,
    prenomvalue: prenomvalue,
    mailvalue: emailvalue,
    agevalue: agevalue,
    nomUservalue: nomUservalue,
    telvalue: telvalue,
    passwordvalue: passwordvalue,
  };
  let personneJson = JSON.stringify(personne);
  if (
    checkAlphabet(nom.value) === 1 &&
    checkAlphabet(prenom.value) === 1 &&
    checkAge(age.value) === 1 &&
    checkTel(tel.value) === 1 &&
    checkPassword(password.value) === 1
  ) {
    localStorage.setItem("stockage", personneJson);
  }
};

function afficher() {
  let personneJson = localStorage.getItem("stockage");
  let personne = JSON.parse(personneJson);
  if (
    checkAlphabet(nom.value) === 1 &&
    checkAlphabet(prenom.value) === 1 &&
    checkAge(age.value) === 1 &&
    checkTel(tel.value) === 1 &&
    checkPassword(password.value) === 1
  ) {
    console.table([personne]);
  }
}
function checkChamp() {
  if (
    prenom.value.trim() !== "" &&
    nom.value.trim() !== "" &&
    age.value.trim() !== "" &&
    password.value.trim() !== "" &&
    tel.value.trim() !== ""
  ) {
  } else {
    alert("Tout les champs sont obligatoires");
  }
}
effacer.addEventListener("click", (e) => {
  nom.value = "";
  prenom.value = "";
  email.value = "";
  age.value = "";
  nomUser.value = "";
  tel.value = "";
  password.value = "";
});
//localStorage Json
//Supression d'element à la fin
//let T
// T.pop();
// supression avec indice
// tableau.splice(indice,nbrElements);
// supprimer le "h" dans "hello"
// let text = T["hello"];
// let chaine = text.splice(1,1);
//faire recherche sur substr, indexof,
